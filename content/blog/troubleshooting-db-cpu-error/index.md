---
title: "Troubleshooting Rails Database Connection Issue"
date: 2019-10-13
description: Production died then I fixed it.
tags: [Software Engineering, Database, MySQL]
---

A few weeks ago I was seeing a lot of these errors in production:

```bash
ActiveRecord::ConnectionTimeoutError - could not obtain
a database connection within 5 seconds.
```

And then production went down.

For context, our stack is composed of a Ruby on Rails app with some React peppered in that is containerized by Docker, orchestrated by Kubernetes, and served up from AWS. We use AWS for our MySQL database instances, too.

We were getting a lot of 500 errors and users posting about not being able to use the app. I had the error above as a clue that either something was misconfigured (very unlikely since that would have been caught during our QA process) or the database itself was having trouble.

We went with the second option and opened up RDS in the AWS console. We have an m4.large instance serving up MySQL 5.6 to our production app. The instance was over 100% CPU usage.

So what do to next?

I knew from my time at Lessonly, that sometimes there's not enough available threads in the database connection pool. I remember reading [this article on Heroku](https://devcenter.heroku.com/articles/concurrency-and-database-connections#connection-pool) for insights. The relevant line in here is

> Active Record limits the total number of connections per application through a database setting pool; this is the maximum size of the connections your app can have to the database.

I thought that since we have more customers and it was peak usage time then maybe there just wasn't enough database to go around. And the Heroku article laid out a simple solution, so I edited our _database.yml_ file.

```yml
production:
  <<: *default
  database: iris_app_production
  reconnect: true
  username: <%= ENV['RAILS_DB_USER'] %>
  password: <%= ENV['RAILS_DB_PASS'] %>
  host: <%= ENV['RAILS_DB_HOST'] %>
  pool: 1̶0̶ 40 # Just to be dramatic.
```

That didn't do much after it was deployed so we nixed that, especially since it didn't explain the massive amount of CPU usage. The next thing we could do was narrow down where the problem was coming from. That meant temporarily disabling cron jobs to see if the source was a specific cron job or the main Rails app itself. We have four cron jobs: a daily job that runs in the early AM, an hourly job, and two every-5-minute jobs.

The daily job could be dismissed off the bat because it had already run. The other jobs we disabled one by one to see if helped CPU consumption.

But that didn't work either. We saw no drop in CPU usage. The source of the problem was definitely with the app itself. At this point, an hour had already passed and I was stressed out of my fucking mind because production was down. Not a great feeling and I had to fix it regardless.

I decided to switch tactics and try to investigate the actual queries that were running on the database. I connected to the production database and typed in

```sql
SHOW PROCESSLIST
```

This gave me back a table of all the active threads that were running in the production database.

(In retrospect, I should have started with this but ¯\\_(ツ)\\_/¯).

The most relevant columns `SHOW PROCESSLIST` gives back are:

- **Command**: the command the thread is executing in the DB
  - Read more [here](https://dev.mysql.com/doc/refman/8.0/en/thread-commands.html)
- **Time**: the time in seconds the command is taking to execute
- **Info**: the statement the thread is executing

This was it.

We had several rows stuck on execution with the same type of query:

```sql
SELECT * FROM communications
WHERE communications.access_token = "EXAMPLE"
```

The communications table had almost 600k records, which isn't a lot of records for a properly indexed table to perform a lookup. And lo and behold, the table wasn't indexed by the column **access_token**. All that was left was to create a migration:

```ruby
class AddIndexToCommunications < ActiveRecord::Migration
  disable_ddl_transaction!

  def change
    add_index :communications, :access_token, algorithm: :inplace
  end
end
```

We use the algorithm `:inplace` to prevent the table from locking as its being indexed — the app still needs to use the table! If you're using PostgresQL then use the algorithm `:concurrently`. Since adding concurrent indexes can't be wrapped in transaction, we need `disable_ddl_transaction!`.

After the migration was deployed and run, CPU usage dropped from 100% to 2% when jobs weren't running, which is insane. This is why we properly index tables.

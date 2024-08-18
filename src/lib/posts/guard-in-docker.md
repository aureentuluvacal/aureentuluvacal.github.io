---
title: How to set up Guard in Docker
date: 2021-05-30
description: For when you want to run your test environment completely separate.
tags: [Code]
---

My new place uses the same stack as my last place (React + Rails on Docker). However, when I started we didn't have a configured testing environment (or a test suite) to isolate our tests in. I like to use [Guard](https://github.com/guard/guard) with [RSpec](https://github.com/rspec/rspec) to keep RSpec "warm". It's also super helpful when doing TDD so you can just keep running your specs over and over.

I'm assuming you already have a Guardfile and Dockerfile. In case you don't have a Dockerfile, here's a simple one that leverages MySQL.

> [This is my favorite best practice guide](https://lipanski.com/posts/dockerfile-ruby-best-practices) for creating a Dockerfile.

```bash
# Pick your version of Ruby.
FROM ruby:2.7.2

# Update the package lists before installing.
RUN apt-get update -qq

# This installs
# * build-essential because Nokogiri requires gcc
# * common CA certs
# * the mysql CLI and client library
RUN apt-get install -y \
  build-essential \
  ca-certificates \
  default-libmysqlclient-dev

# Install your version of Node.
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get install -y nodejs

# Create working directory
ENV APP_HOME /app
RUN mkdir ${APP_HOME}
WORKDIR ${APP_HOME}

# Copy the Gemfile
COPY Gemfile ${APP_HOME}/Gemfile
COPY Gemfile.lock ${APP_HOME}/Gemfile.lock

# Make sure we are running bundler version 2.0
RUN gem install bundler -v 2.1.4
RUN bundle install

# Copy the project over
COPY . ${APP_HOME}

# Run guard
CMD ["bundle", "exec", "guard", "--no-bundler-warning", "--no-interactions"]
```

Then create a new `docker-compose.test.yml` file.

```yml
version: '3.8'
services:
  db:
    image: mysql:5.7
    env_file: .env

  redis:
    image: 'redis:5-alpine'

  guard:
    tty: true
    stdin_open: true
    depends_on:
      - db
      - redis
    build:
      context: .
      dockerfile: Dockerfile.test
    env_file: .env
    volumes:
      - '.:/app'
```

So as is, we can run `docker compose -f docker-compose.test.yml --build up` and Guard will start up. You can then edit and save one of your specs to execute it.

But what if you want to use the `pry` gem and stop execution of your tests?

This part of the Docker Compose file is key:

```yml
tty: true
stdin_open: true
```

These keys map to the `-t` and `-i` flags, respectively, when running `docker run exec -it CONTAINER_NAME`. This command opens a pseudo terminal that connects your machine's terminal (iTerm, Terminal, CommandPrompt) to the `stdin`/`stdout` stream of the container. It lets you "login" to the container to run commands and view the output of said commands, basically.

Tying this back to spec execution, you could then attach yourself to the Docker container running guard using `docker attach CONTAINER_ID` and you'd see a REPL session from `pry` wherever you added `binding.pry` in your spec.

For example:

```ruby
describe "validations" do
  it 'is valid with valid attributes' do
    binding.pry # <---- Here
    expect(build(:user)).to be_valid
  end
end
```

Running this spec will stop execution at the `binding.pry` where you can then attach to the container and see the REPL session so you can test what `build(:user)` yields and other variables or logic in your spec.

> A quick way to attach to a container in one line is `docker attach $(docker ps -aqf "ancestor=CONTAINER_NAME | head -n 1)`.

Happy testing!

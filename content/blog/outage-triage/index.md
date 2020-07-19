---
title: How I caused another outage
date: 2020-07-19
description: And the new process I'll be using going forward.
tags: [Code]
---

We haven't had an outage at Iris in like 8 months. I guess it was just a matter of time before it happened again, but I thought I'd have the necessary foresight to not introduce code into master that exposes database flaws.

Oh well. I learned what I have to do, so when it does happen again, it won't feel so fan shit hitty.

Now...database flaws, what does that mean? If you've guessed an unindexed table, you'd be correct! 🎉 

Regrettably, I made a noob mistake merging a database migration adding an index to a beefy table and the code that required the migration to work effectively in the same release. I should have released the migration first then the feature after the table was done indexing in production. But it turns out, that wasn't the direct cause of the outage.

The migration just didn't even run during the deployment in Kubernetes and it took me too long to realize that fact. I noticed the failed pod, looked at the logs, and realized the `rails db:migrate` process errored out on some faulty data.

> This is totally an aside, but if you ever see an error during a migration that adds a foreign key, check the table you're trying to add the foreign key to for orphaned rows. Can't add a key to something that doesn't exist.

After I fixed the data, the migrations ran. The index completed in 10 minutes and the app started working again because the database wasn't overloaded with slow ass queries. In the aftermath I harnessed the leftover anger I had towards myself (fueled by the thought, "I'm the CTO, I should know better") and cranked out a new outage contingency plan.

## The new plan

Our plan is composed of three steps: (1) Diagnosis, (2) Reverting master, and (3) Make the fix.

### Diagnosis

This step should take less than 20 minutes because it's about identifying the fix, not actually fixing it. I laid out common sources of outages after a release, including the code itself, the code exposing a database flaw, and a deployment failure. 

We use Rollbar to track 4XX and 5XX errors, so finding the tracked issue that relates to a code issue is easy. The fix inherently could be more complicated because the faulty code could be anywhere.

If there's no obvious sign in Rollbar of a code issue, then the next thing to check is RDS in AWS for high CPU usage. When I looked at RDS during this last outage, CPU usage would spike intermittently. Running `SHOW PROCESSLIST;` within the instance proved that an index was missing because so many threads were stuck on the same query.

The last source to check is the Kubernetes deployment. The logs for our `deploy-tasks` pod were pretty clear about the error that occurred during the migration.

### Revert master

This step should have happened within the first 15-20 minutes of us noticing the outage. Instead, I focused my energy on finding the fix for a source I had yet to find because I looked at Kubernetes last and caused the app to be down for way longer than it should have been. 

![image](https://media.giphy.com/media/X7jENDat6V5Je/giphy.gif)

At least this is the easiest step.

### Make the fix

The actual fix can vary in complexity depending on if it's an actual code issue that's the source of the outage. This makes sense since the codebase is so large; some areas you don't want to touch and some of the newer areas are pleasant because _you_ wrote them.

Database and deployment issues are easier to fix, in my opinion, because the former requires a migration while the latter requires you to fix errors that occur during a single command (`rails db:migrate`). 

>  I covered how to add a new index asynchronously in [Troubleshooting Rails Database Connection Issue](https://caryssaperez.com/troubleshooting-db-cpu-error).


## Going forward

This process is definitely a living document so I can record different fixes for different causes of the outage. It's also good to have for my two other engineers to reference in case I'm incapacitated or otherwise unavailable.

Hopefully, I can minimize the noob mistakes.

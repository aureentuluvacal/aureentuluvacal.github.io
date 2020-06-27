---
title: Having a fun (and terrible) time with AWS, Docker, and Node
date: 2020-06-26
description: Who would have thought there'd be so many pieces to getting a basic app setup on AWS.
tags: [Code]
---

We're doing a three month feature freeze at Iris to address our technical debt, refine processes, and create enablement for the entire team. There's a very long story to this, but the main gist is weight of years old technical debt was taking its toll. We're spending these three months very wisely to improve everything and it's honestly one of the most refreshing professional experiences I've had.

One of our projects is an app that enables the support team to have all the data they need to address customer issues. Our bug escalation process has three tiers: the CS team, my CEO, then dev team. (Remember, we're a team of seven so there's a lot of hat wearing.) 

Typically, if it requires database access and SQL knowledge to verify certain details, my CEO will takeover and potentially escalate if the issue is clearly a bug in our code. The goal is to limit escalations to save everyone's time and energy. As an added bonus, we'd also get that particular giddiness developers get when starting a new project.

## The architecture

We already use AWS, Docker, and Kubernetes for our app so it made sense to use at least AWS and Docker. Kubernetes felt like overkill for something only two people would access for now. I had already created a repo in Gitlab to house the code for two separate apps. One for the React app that they'd interact with and one for the Node app that would act as its API. 

> I could have made it one app that did server-side rendering but we're already doing that with Rails for the main app and I wanted to do something new.

In my head the architecture looked like this:

![First version of the architecture](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/supportal-architecture-1.jpg)

I Dockerized the apps with no problems and, with that momentum, plunged into AWS. First, I booted up one t2.micro instance in EC2 and a t2.micro instance in RDS running MySQL. We use Route 53 for all our `*.iris-works.com` sites, so a new subdomain that pointed to the EC2 instance was just a simple paste of the public IPv4 address of the instance.

I tried to access the new site that pointed to the React app and got nothing. Then for the next several hours I struggled. It was one of those moments where I understood from a high level what was going on, but then also had no idea what was happening. My frantic Googling didn't help really since the various Medium and Dev.to posts didn't include exactly everything I was using or didn't use them in the same way and it only confused me more. Why can't I see the index file when I attempt to load the site?  What the hell was Elastic Beanstalk? Why would I need a load balancer? Where are the Docker containers in EC2 instances articles?

I left work that day frustrated because it started out so well. I hoped that night I'd dream up a solution, but my brain isntead subjected me to one of those choppy and disturbing marathon dreams that had me questioning my reality. Because why not.

![Inception gif of Cobb saying "It's only when we wake up that we realize something was actually strange."](https://media.giphy.com/media/1412QM7NaCZMyc/giphy.gif)

The next day, I started over and questioned my fundamental understanding of all the technologies I was using, especially the ones I needed under Amazon's wide umbrella. 

I felt comfortable with React, Node, Typescript, and Docker. However, I was bootstrapping the app with Create React App and I needed to read more on how to deploy a production build. It was then I started to realize that I was running a container that was doing nothing except storing static files. I needed a simple server underneath it to, you know, actually serve up the files.

In development, when you run `yarn start` or `react-scripts start` it uses your actual physical machine as the server to serve the static files, which you access with your browser, the client. In EC2 land, instances are just empty hunks of circuitry and metal. And when I add Docker to the mix, it will only install what I tell it to so the containers that result are just as empty.In other words, if I don't install anything to serve the files, then they won't serve. I needed a simple server like nginx.

```Dockerfile
FROM node:14.4 as build
```

I redeployed my changes and reloaded the site and boom, I saw an actual page. The only problem was that it was serving on HTTP only despite the security group allowing incoming traffic on port 443 for HTTPS.

Obviously, I had pieces missing and I wanted to turn back to AWS instead of figuring out how to add SSL to my nginx config.

## My new understanding of AWS

I still had this fuzziness in my knowledge of _how_ everything was working together in AWS and what services I actually needed. 

I had a Route 53 record pointing to an EC2 instance that only handled traffic on port 80 for HTTP requests. In the various articles I read, ALBs, port forwarding, and target groups kept coming up. I didn't know what any of this was until today.

In retrospect, I realize that Elastic Beanstalk could have done all of this for me, but where's the fun in that?
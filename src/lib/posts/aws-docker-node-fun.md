---
title: Having a fun (and terrible) time with AWS, Docker, and Node
date: 2020-06-27
description: Who would have thought there'd be so many pieces to getting a basic app setup on AWS.
tags: [Code]
---

We're doing a three month feature freeze at Iris to address our technical debt, refine processes, and create enablement for the entire team. There's a very long story to this, but the main gist is weight of years old technical debt was taking its toll. We're spending these three months very wisely to improve everything and it's honestly one of the most refreshing professional experiences I've had.

One of our projects is an app that enables the support team to have all the data they need to address customer issues. Our bug escalation process has three tiers: the CS team, my CEO, then the dev team. (Remember, we're a team of seven so there's a lot of hat wearing.)

Typically, if it requires database access and SQL knowledge to verify certain details, my CEO will takeover and potentially escalate if the issue is clearly a bug in our code. Understandably, it takes time to triage bugs and fill in the next tier about what's going on. Therefore, our goal is to limit escalations to save everyone's time and energy.

As an added bonus, we'd also experience that particular giddiness developers get when starting a new project.

## The architecture

We already use AWS, Docker, and Kubernetes for our app so it made sense to use at least AWS and Docker. Kubernetes felt like overkill for something only two people would access for now. I had already created a repo in Gitlab to house the code for two separate apps. One for the React app that they'd interact with and one for the Node app that would act as its API.

> I could have made it one app that did server-side rendering but we're already doing that with Rails for the main app and I wanted to do something new.

In my head the architecture looked like this:

![First version of the architecture](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/supportal-architecture-1.jpg)

I Dockerized the apps with no problems and, with that momentum, plunged into AWS. First, I booted up one t2.micro instance in EC2 and a t2.micro instance in RDS running MySQL. We use Route 53 for all our _\*.iris-works.com_ sites, so a new subdomain that pointed to the EC2 instance was just a simple paste of the public IPv4 address of the instance.

I tried to access the new site that pointed to the React app and got nothing. Then for the next several hours I struggled. It was one of those moments where I understood from a high level what was going on, but then also had no idea what was going on.

My frantic Googling didn't help really since the various Medium and StackOverflow posts didn't include exactly everything I was using or didn't use them in the same way and it only confused me more. Why can't I see the index file when I attempt to load the site? What the hell was Elastic Beanstalk? Why would I need a load balancer?

I left work that day frustrated because it started out so well. I hoped that night I'd dream up a solution, but my brain instead subjected me to one of those choppy and disturbing marathon dreams that had me questioning my reality. Because why not.

![Inception gif of Cobb saying 'It's only when we wake up that we realize something was actually strange.'](https://media.giphy.com/media/1412QM7NaCZMyc/giphy.gif)

The next day, I started over and questioned my fundamental understanding of all the technologies I was using, especially the ones I needed under Amazon's wide umbrella.

I felt comfortable with React, Node, Typescript, and Docker. However, I was bootstrapping the app with Create React App and I needed to read more on how to deploy a production build. It was then I started to realize that I was running a container that was doing nothing except storing static files. I needed a simple server underneath it to, you know, actually serve up the files. A novel concept.

In development, when you run `yarn start` or `react-scripts start` it uses Webpack to bundle static assets, which are then served up by the WebpackDevServer, which you then access with your browser, the client. In EC2 land, instances are just empty hunks of circuitry and metal. And when I add Docker to the mix, it will only install what I tell it to, so the containers that result are just as empty. In other words, if I don't install anything to serve the files, then they won't serve. I needed a simple server like nginx.

```bash
# Use the latest node and alias for temporary use.
FROM node:14.4 as build

# Create directory for the container.
WORKDIR /client

# Only copy the package.json file to work directory.
ADD package.json /client/package.json

# Install all packages.
RUN yarn install

# Copy all other source code to work directory.
ADD . /supportal_client

# Build static assets.
RUN yarn build

# Run in nginx.
FROM nginx:stable-alpine

COPY --from=build /client/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

I redeployed my changes and reloaded the site and boom, I saw an actual page. The only problem was that it was serving on HTTP only despite the security group allowing incoming traffic on port 443 for HTTPS.

Obviously, I had pieces missing and I wanted to turn back to AWS instead of figuring out how to add SSL to my nginx config.

## My new understanding of AWS

I still had this fuzziness in my knowledge of _how_ everything was working together in AWS and what services I actually needed.

I had a Route 53 record pointing to an EC2 instance that only handled traffic on port 80 for HTTP requests and SSH traffic for me. In the various articles I read, ALBs, port forwarding, and target groups kept coming up. I didn't know what any of this was until yesterday. (I'm not a devops or networking person so a lot of this was handwaved away.)

Anyway, I know EC2 instances are just someone else's servers and that security groups allow specific kinds of traffic to those servers. If I wanted to get actual traffic via HTTPS I needed to add an Application Load Balancer (ALB), which is AWS's new, specialized version of an Elastic Load Balancer (ELB). ALBs or ELBs are basically guardsmen that redirect internet traffic to an EC2 instance.

I could take advantage of the ALB to handle HTTPS requests then forward to the running nginx container. ALBs set this up with target groups, which are also under the EC2 service page, to redirect to specific ports for the destination server. My target group had to point to port 80 for HTTP and HTTPS requests. All I had left to do was point the Route 53 record to the new ALB.

After all this clicked, the architecture looks more like this:

![Second version of the architecture](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/supportal-architecture-2.jpg)

It felt good to finally see the site over HTTPS. Now I can actually build the damn thing and I'm super excited for it. Typescript, React, TypeORM, GraphQL; it's going to be good.

Also, in retrospect, I realize that Elastic Beanstalk could have done all of this for me, but where's the fun in that?

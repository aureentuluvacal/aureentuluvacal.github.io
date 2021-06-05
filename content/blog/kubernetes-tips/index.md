---
title: "Some Kubernetes tips I've learned"
date: 2020-08-09
description: I had to learn Kubernetes on the job when I first started at Iris. Here's some things that helped me along the way.
tags: [Code]
---

Kubernetes (or k8s as I'll refer to it from now on) was extremely intimidating when I first started at Iris. I was coming from a software engineering background that had nothing to do with DevOps of any kind, so that was understandable. DevOps felt like the realm of those Linux and networking wizards who look very much unlike me and wield shell scripts as easily as I can write HTML.

In retrospect, I was definitely being dramatic about it, but imposter syndrome is hard to extricate yourself from when you're new _and_ you're learning something new. Also, I wasn't learning something new with the buffer of a team. I _had_ to learn this because I was the only person on the Dev team.

Now, 15 months later, I feel incredibly comfortable with k8s. There's definitely still stuff for me to learn, of course, but it's not soul crushingly stymying anymore.

## A quick aside

When I was first learning, I watched [this video](https://www.youtube.com/watch?v=PH-2FfFD2PU) because, you know, five minutes was all it was going to take.

I still have yet to create my own copy of this diagram and fill in the more complicated bits that Steve Tegeler briefly mentions. When I do, I'll definitely post about it.

The video definitely demystified how everything worked, though. It's just images on machines that are orchestrated by a series of processes and APIs that run on a master machine. I have no idea how, but that's not the point of the video.

## Configuration adjustments

We have a lot of YAML files, settings for each environment we deploy, including QA, Demo, Staging, and Production. I had also inherited the files, but the myriad different settings intimidated me most. I understand that the purpose of the YAML is a declaration of state. Basically, "I want this Docker image, with these environment variables, in this namespace running in my cluster." You don't care how k8s does it, you just trust that it does.

But how could I make our deployments more efficient and not "just work"?

Instead of studying all of the possible configurations, I started with the problem I had at hand: production would randomly spike in CPU usage then go down (🎉Yay!🎉). I like to think that it was because we have more users and this is just the next problem to solve at a scaling company. Right?

Anyway, I noticed in AWS that CPU usage for one k8s node was the only one spiking.

![y tho](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/y.jpg)

I dug into it and noticed that most of our pods were running in this node. By default, the k8s scheduler decides where pods should run based on the resources available. However, production was using most of the node's resources. I needed to spread it out across the other three m4.larges(!) we have in the cluster.

We weren't using the _replica_ setting at all. I upped only production to four because we have four worker nodes and the other environments will never get as much traffic. Just in case, I put in some CPU and memory limits under the _resources_ setting.

> The limits are subject to change since I honestly just picked random numbers until it looked ok in AWS.

```yaml
# Truncated because it's a secret!

 replicas: 4
    spec:
      containers:
          resources:
            requests:
              memory: 2.5G
              cpu: 500m
            limits:
              memory: 2.5G
              cpu: 500m
```

## Helpful commands

Here's the obvious commands:

```bash
# List all the pods in a particular namespace.
kubectl get pods -n NAMESPACE

# Show details about a particular pod.
kubectl describe pod POD_NAME

# List the actual machines the cluster is running on.
kubectl get nodes

# Show details about a particular node.
kubectl describe node NODE

# Startup the proxy server to see that lovely GUI.
kubectl proxy

# Run a command in a pod.
kubectl -it exec -n NAMESPACE -- CMD
```

And more on the k8s site with [their handy dandy cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/).

The most helpful thing I made was a function in my `.zshrc` to save those precious seconds running a command in a pod.

```bash
# Add this to .bashrc or .zshrc.
# (I added the slashes for readability.)
function k8s_exec() {
  kubectl -it exec -n $1 \
  $(kubectl get pods -n $1 | grep -oh -m 1 "web-\w*-\w*") \
  -- ${@:2}
}
alias k8sweb='k8s_exec'
```

Let me break this down:

- `kubectl -it exec`, open a shell
- `-n $1`, in the specified namespace using the first argument
- `kubectl get pods -n $1`, get pods in the same namespace which is piped into _grep_
- `grep -oh -m 1 "web-\w*-\w*"`, which finds the first match of the name that includes "web"
- `-- ${@:2}`, then runs the command in the pod that _grep_ found with the remaining arguments after the first one

You'd run it like

```bash
k8sweb qa rails c
```

if you wanted to open a Rails console in the "web" pod in QA. This is definitely unique to our setup. Your pod name could be "walrus" or something, so tweak it as needed.

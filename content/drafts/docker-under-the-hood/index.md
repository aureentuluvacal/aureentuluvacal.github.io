---
title: 'Docker Under the Hood'
date: 2022-11-18
tags: [Code]
---

## Why Docker?

- Can include all the libraries/packages needed to run your code (via an image)
- Can execute multiple copies of your code at the same time (via containers)
- Does not rely on traditional Virtual Machine mechanisms since it's not a VM
  - More memory efficient way of scaling apps/mimicking other machines

## What differentiates machines

Different processors have their own inherent machine code or machine language that the chip can understand based on how they read and write to memory. In other words, the language is hardware-dependent. Here are a few chips you've probably heard of:

- x86 (Intel)
- ARM
- MIPS
- K# (AMD)
- M1 (Apple)
- AWS Graviton (Amazon)

Trying to run

## Virtualization without Docker

Instead of diving into how VMs work and the different software you can use to run a VM, I just want to address how you would have virtualization without Docker.

I'm pretty sure it boils down to:

1. A way to mimic an OS

   - i.e. Software that imitates other software

2. A way to mimic hardware to support multiple machine languages

   - i.e. Software that mimics hardware
   - e.g. Intel x86 chips supporting some ARM instruction sets

3. A way to manage all these mimics

   - This is called a hypervisor
   - i.e. Software that acts as the bridge between your machine’s kernel and virtual OSes

## Virtualization with Docker

What is Docker?
Linux control groups and namespaces on steroids
It’s native to Linux, which is why we have emulators on MacOS and Windows for the Desktop apps
Entire purpose is to remove the need for a hypervisor because you’re not using virtual OSes
Saves time and memory!

## Recommended Reading

- [An article that dives into how Docker works](https://www.codementor.io/blog/docker-technology-5x1kilcbow)

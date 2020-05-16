---
title: Building a UI Library
date: 2020-05-12
description: When companies reach a certain size, it's only a matter of time before they create their own UI library. But why wait? I think you should have a UI library as early as possible.
tags: [Code]
---

I inherited a decently large codebase with _a lot_ of legacy code (Rails 4.2.7, Handlebars, and a lot of jQuery). In an effort to modernize the front end, there was a bit of React peppered in, but it was about 5% of the front end. I knew converting it all would be one of our years long projects, and I wanted to make that process as painless as possible. In my head, I saw what the front end would become: consistent, modular, easy to update, 100% in React. However, I had no foundation to start with so I built a UI library.

## Where I started

I've used [MaterialUI](https://material-ui.com/) and [SemanticUI](https://semantic-ui.com/) before so I already had a baseline for what a UI library was. That is, a collection of self-contained components that follow a specific design pattern. The design can either be super specific like MaterialUI (since it's based off of Google's material design) or be a little more customizable like Semantic.

When I started on the library, we had just rebranded and the entire design of the app was wildly different.

Like wildly different:

## What I learned

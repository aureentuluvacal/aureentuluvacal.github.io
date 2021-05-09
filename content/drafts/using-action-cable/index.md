---
title: Using ActionCable in a non-chat way
date: 2021-04-10
description: I recently did a Fiverr order where I discovered that all the ActionCable blog posts are for chat apps. I wanted to write about it outside of that context.
tags: [Code]
---

I recently did a Fiverr order where I discovered that all the ActionCable blog posts are for chat apps. I wanted to write about it outside of that context because there should be more examples of how Websockets are used.

For simplicity's sake, I'm going to create a new Rails app and add ActionCable channels for file downloads and uploads.

Let's begin:

```bash
rails new cable_example_app
```

In the `app/channels/application_cable/` directory you will find the parent classes for an ActionCable::Channel and an ActionCable::Connection. All of your child classes that do a unit of work for a specific entity or resource will inherit from these classes.

## Final Code

I like to start with the full code then break it down. Here are the `DownloadChannel` and `UploadChannel` classes.

```ruby
# app/channels/download_channel.rb
class DownloadChannel < ApplicationCable::Channel
end
```

```ruby
# app/channels/upload_channel.rb
class UploadChannel < ApplicationCable::Channel
end
```

## Directions

Rails has a generator for channels too so we can run `bin/rails g channel NAME`:

```bash
bin/rails g channel UploadChannel
Running via Spring preloader in process 96357
      invoke  test_unit
      create    test/channels/upload_channel_test.rb
      create  app/channels/upload_channel.rb
   identical  app/javascript/channels/index.js
   identical  app/javascript/channels/consumer.js
      create  app/javascript/channels/upload_channel.js
```

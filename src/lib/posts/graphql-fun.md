---
title: GraphQL and Schema Stitching
date: 2020-08-23
description: We recently built a support app that combines two GraphQL schemas. This is just a guide for how to make it work in Typescript.
tags: [Code]
---

I'm having a great time building out the support app for Iris. I talked about deploying it on AWS in [this post](https://caryssaperez.com/aws-docker-node-fun) and now we're gonna talk about the backend. The stack for the support app is a React app that communicates with a Node backend requesting data from a GraphQL server. All of it is written in Typescript.

The Iris app was recently GraphQLified, meaning I used the [GraphQL gem](https://github.com/rmosolgo/graphql-ruby) and Shopify's [batching gem](https://github.com/Shopify/graphql-batch) to expose a new `/graphql` endpoint on the Rails backend.

> By the end of this post I'm going to get tired of typing GraphQL.

Since I had two separate schemas, I had to combine them so both were usable in one go from the `/graphql` endpoint in the Node app.

So how do we do this?

### The code

I like to start with the full code then break it down. Obviously, this code is pared down to exclude Iris specific stuff.

```typescript
import { buildSchema } from 'type-graphql';
import fetch from 'node-fetch';
import { print, DocumentNode, GraphQLResolveInfo } from 'graphql';
import {
  introspectSchema,
  mergeSchemas,
  wrapSchema,
  ExecutionResult,
} from 'graphql-tools';
import { UserResolver } from './resolvers/UserResolver';

type Executor = (operation: ExecutionParams) => Promise<ExecutionResult>;

type ExecutionParams = {
  document: DocumentNode;
  variables?: Object;
  context?: Object;
  info?: GraphQLResolveInfo;
};

const executor: Executor = async ({ document, variables }) => {
  const query = print(document);
  const fetchResult = await fetch(process.env.URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return fetchResult.json();
};

export const getSchema = async () => {
  try {
    const localSchema = await buildSchema({
      resolvers: [UserResolver],
      emitSchemaFile: true,
      dateScalarMode: 'isoDate',
    });

    const remoteSchema = wrapSchema({
      schema: await introspectSchema(executor),
      executor,
    });

    return mergeSchemas({
      schemas: [localSchema, remoteSchema],
    });
  } catch (error) {
    console.error(error);
  }
};
```

### The explanation

Let's go section by section.

```typescript
import { buildSchema } from 'type-graphql';
```

We use [TypeGraphQL](https://typegraphql.com/) to create the support app's schema and resolvers. I won't go into how it works, but you should definitely check it out.

```typescript
import fetch from 'node-fetch';
import { print, DocumentNode, GraphQLResolveInfo } from 'graphql';
import {
  introspectSchema,
  mergeSchemas,
  wrapSchema,
  ExecutionResult,
} from 'graphql-tools';
import { UserResolver } from './resolvers/UserResolver';
```

The rest of the imports are `fetch`, the functions and types needed from the `graphql` and `graphql-tools` to merge the schemas, and our `UserResolver` that we made with TypeGraphQL.

```typescript
type Executor = (operation: ExecutionParams) => Promise<ExecutionResult>;

type ExecutionParams = {
  document: DocumentNode;
  variables?: Object;
  context?: Object;
  info?: GraphQLResolveInfo;
};

const executor: Executor = async ({ document, variables }) => {
  const query = print(document);
  const fetchResult = await fetch(process.env.URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return fetchResult.json();
};
```

Line 11 just defines the type for our `executor()` function parameters, which is why we imported `DocumentNode`, and `GraphQLResolveInfo`. Line 18 defines `executor()` function that actually fetches GraphQL results from the URL defined in our `.env`.

```typescript
export const getSchema = async () => {
  try {
    const localSchema = await buildSchema({
      resolvers: [UserResolver],
      emitSchemaFile: true,
      dateScalarMode: 'isoDate',
    });

    const remoteSchema = wrapSchema({
      schema: await introspectSchema(executor),
      executor,
    });

    return mergeSchemas({
      schemas: [localSchema, remoteSchema],
    });
  } catch (error) {
    console.error(error);
  }
};
```

Line 38 builds the local schema with TypeGraphQL, while line 44 introspects the remote schema and uses the `executor()` function from above to parse the results. Finally, `wrapSchema()` is called to avoid type and naming collisions between the two schemas.

Line 49 combines both schemas, which makes it possible to send something like

```graphql
query {
 users {
  id
  name
 }
 studios {
  name
  clients {
   email
  }
 }
}
```

to the _one_ GraphQL endpoint using both executable schemas to get data back from both data sources. (`users` belongs to the local schema and `studios` belongs to the remote schema.)

It makes me feel super smart, but it's really just GraphQL doing all the heavy lifting.

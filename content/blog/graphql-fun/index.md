---
title: GraphQL, Node, Rails, and Schema Stitching
date: 2020-08-20
description: We recently built a support app that combines two GraphQL schemas. This is just a guide for how to make it work in Typescript.
tags: [Code]
---

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

type ExecutionParams = {
  document: DocumentNode;
  variables?: Object;
  context?: Object;
  info?: GraphQLResolveInfo;
};

const executor = async ({
  document,
  variables,
}: ExecutionParams): Promise<ExecutionResult<any>> => {
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

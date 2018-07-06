---
title: apollo-link-gun
description: Use graphql-gun with Apollo
---

The gun link provides a [connection to gundb](https://github.com/amark/gun), via the `graphql-gun` package.

## Installation

`npm install apollo-link-gun --save`

## Usage

```js
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GunLink } from 'apollo-link-gun';

// Schema is optional if you want validation
import schema from './path/to/your/schema';

const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new GunLink({ schema })
});
```

### Options

The `GunLink` constructor can be called with an object with the following properties:

* `schema`: an optional graphql schema for validation
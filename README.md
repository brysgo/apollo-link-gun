---
title: apollo-link-gun
description: Use graphql-gun with Apollo
---

![Github Checks Badge](https://camo.githubusercontent.com/72f1b5b38cac173a101e9b94e3483d8f2bb59b1d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875625f416374696f6e732d737563636573732d737563636573732e7376673f6c6f676f3d676974687562266c6f676f436f6c6f723d7768697465)
[![Greenkeeper badge](https://badges.greenkeeper.io/brysgo/apollo-link-gun.svg)](https://greenkeeper.io/)

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

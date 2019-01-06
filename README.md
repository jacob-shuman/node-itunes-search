# node-itunes-search

> A simple NodeJS wrapper for the ITunes Search API.

[![npm](https://img.shields.io/npm/v/node-itunes-search.svg)](https://www.npmjs.com/package/node-itunes-search)
[![Build Status](https://travis-ci.org/jacob-shuman/node-itunes-search.svg?branch=master)](https://travis-ci.org/jacob-shuman/node-itunes-search)

## Installation

```bash
$ npm install node-itunes-search
```

## Importing

#### Commonjs

```ts
const itunesAPI = require("node-itunes-search");
```

#### ES6

```ts
import {ItunesSearchOptions} from "node-itunes-search";
```

#### Default Namespace

```ts
import ItunesSearch from "node-itunes-search";
```

## Usage

The module exposes 2 functions `searchItunes` and `lookupItunes` which can be used to search and lookup content using the Itunes Search API respectively.

Both of these functions use vanilla javascript promises which, when successful, will return an `ItunesResult`.

**Note** Versions 1.2.0 and higher now have a simpler syntax.

### Search

```ts
const itunesAPI = require("node-itunes-search");

const searchOptions = new itunesAPI.ItunesSearchOptions({
  term: "Queen Bohemian Rhapsody", // All searches require a single string query.

  limit: 1 // An optional maximum number of returned results may be specified.
});

itunesAPI.searchItunes(searchOptions).then((result) => {
  console.log(result);
});
```

### Simple Search

```ts
const itunesApi = require("node-itunes-search");

const searchOptions = {
  term: "Queen Bohemian Rhapsody",
  limit: 1
};

const result = await itunesApi.searchItunes(searchOptions);
```

### Lookup

```ts
import {
  lookupItunes,
  ItunesResult,
  ItunesLookupOptions,
  ItunesLookupType
} from "node-itunes-search";

const lookupOptions = new ItunesLookupOptions({
  keys: ["560857776"], // Specify ID(s) of desired content
  keyType: ItunesLookupType.ID // Searching by content ID(s)
});

lookupItunes(lookupOptions).then((result: ItunesResult) => {
  console.log(result);
});
```

### Simple Lookup

```ts
import ItunesSearch from "node-itunes-search";

const lookupOptions: ItunesSearch.LookupOptionsInterface = {
  keys: ["560857776"],
  keyType: ItunesSearch.LookupType.ID
};

const result: ItunesSearch.Result = await ItunesSearch.lookup(lookupOptions);
```

## Contributing

Feel free to make an issue or pull request. My schedule is pretty open so I will be more than happy to review them in a short amount of time.

## Examples

Look in the examples directory for usage examples.

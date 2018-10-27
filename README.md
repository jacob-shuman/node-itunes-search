# node-itunes-search
> A simple NodeJS wrapper for the ITunes Search API.

## Installation
```bash
$ npm install node-itunes-search
```

## Simple Usage
#### Song Search
```ts
//ES6
import { ItunesSearchOptions } from 'node-itunes-search'

//CommonJS
const itunesApi = require('node-itunes-search');

const searchOptions = new ItunesSearchOptions({
      term: "Queen Bohemian Rhapsody",
      limit: 1
    });

itunesApi.searchItunes(searchOptions)
```

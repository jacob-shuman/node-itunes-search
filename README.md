# node-itunes-search

> A simple NodeJS wrapper for the ITunes Search API.

[![npm](https://img.shields.io/npm/v/node-itunes-search.svg)](https://www.npmjs.com/package/node-itunes-search)
[![Build Status](https://travis-ci.org/jacob-shuman/node-itunes-search.svg?branch=master)](https://travis-ci.org/jacob-shuman/node-itunes-search)

## Installation
```bash
$ npm install node-itunes-search
```

## Basic Usage
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

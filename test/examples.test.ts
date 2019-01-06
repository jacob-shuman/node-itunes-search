import {ItunesResult, ItunesSearchOptions} from "../src/index";

describe("Search Examples", () => {
  test("Song Search", () => {
    expect.assertions(1);

    const itunesAPI = require("node-itunes-search");

    const searchOptions = new itunesAPI.ItunesSearchOptions({
      term: "Queen Bohemian Rhapsody",
      limit: 1
    });

    return itunesAPI
      .searchItunes(searchOptions)
      .then((result: ItunesResult) => {
        console.log(result);
        return expect(result.resultCount).toEqual(1);
      });
  });
});

import {
  lookupItunes,
  ItunesLookupType,
  ItunesLookupOptions
} from "../src/index";

describe("Lookup Examples", () => {
  test("Lookup Song by ID", () => {
    expect.assertions(1);

    const lookupOptions = new ItunesLookupOptions({
      keys: ["560857776"],
      keyType: ItunesLookupType.ID
    });

    return lookupItunes(lookupOptions).then((result: ItunesResult) => {
      console.log(result);
      return expect(result.resultCount).toBeGreaterThan(0);
    });
  });
});

// Version 2.0.0

import ItunesSearch from "../src/index";

describe("Search Examples (2.0.0)", () => {
  test("Song Search", async () => {
    expect.assertions(1);

    const itunesAPI = require("node-itunes-search");

    const searchOptions: ItunesSearch.SearchOptionsInterface = {
      term: "Queen Bohemian Rhapsody",
      limit: 1
    };

    const result: ItunesSearch.Result = await ItunesSearch.search(
      searchOptions
    );

    return expect(result.resultCount).toEqual(1);
  });
});

describe("Lookup Examples (2.0.0)", () => {
  test("Lookup Song by ID", async () => {
    expect.assertions(1);

    const lookupOptions: ItunesSearch.LookupOptionsInterface = {
      keys: ["560857776"],
      keyType: ItunesSearch.LookupType.ID
    };

    const result: ItunesSearch.Result = await ItunesSearch.lookup(
      lookupOptions
    );

    return expect(result.resultCount).toBeGreaterThan(0);
  });
});

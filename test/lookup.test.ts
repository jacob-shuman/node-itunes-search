import {
  lookupItunes,
  itunesLookupRoot,
  ItunesLookupOptions,
  ItunesLookupType,
  ItunesResult,
  ItunesEntityMusic,
  searchItunes,
  ItunesSearchOptions,
} from "../src/index";

describe("Lookup", () => {
  test("Correct Lookup Format", () => {
    const key = "1440660665";
    const type = ItunesLookupType.ID;

    const lookupOptions = new ItunesLookupOptions({
      keys: [key],
      keyType: type,
    });

    expect(lookupOptions.toURI()).toBe(`${type}=${key}`);
  });

  test("Correct Lookup Format With Limit", () => {
    const key = "1440660665";
    const type = ItunesLookupType.ID;

    const lookupOptions = new ItunesLookupOptions({
      keys: [key],
      keyType: type,
      limit: 1,
    });

    expect(lookupOptions.toURI()).toBe(`${type}=${key}&limit=1`);
  });

  test("Successful Lookup", () => {
    expect.assertions(1);

    const lookupOptions = new ItunesLookupOptions({
      keys: ["1440660665"],
      keyType: ItunesLookupType.ID,
    });

    return lookupItunes(lookupOptions).then((result: ItunesResult) => {
      return expect(result.resultCount).toBeGreaterThan(0);
    });
  });

  test("Lookup With Entity", () => {
    expect.assertions(1);

    const lookupOptions = new ItunesLookupOptions({
      keys: ["1440660665"],
      keyType: ItunesLookupType.ID,
      entity: ItunesEntityMusic.Song,
      limit: 1,
    });

    return lookupItunes(lookupOptions).then((result: ItunesResult) => {
      return expect(result.resultCount).toBe(1);
    });
  });
});

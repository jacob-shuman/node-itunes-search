import { describe, expect, test } from "vitest";
import {
  ItunesEntityMusic,
  ItunesMedia,
  ItunesSearchOptions,
  searchItunes,
} from "../src/mod";
import { getSearchParams } from "../src/search";

describe("Search", () => {
  test("Successful Search", async () => {
    const searchOptions: ItunesSearchOptions = {
      term: "Queen Bohemian Rhapsody",
    };

    const { resultCount } = await searchItunes(searchOptions);

    expect(resultCount).toBeGreaterThan(0);
  });
});

describe("Search Format", () => {
  test("Media Format", () => {
    const term = "Queens of the Stone Age Smooth Sailing";
    const media: ItunesMedia = "music";
    const entity: ItunesEntityMusic = "musicTrack";

    const searchOptions: ItunesSearchOptions = {
      term,
      media,
      entity,
    };

    expect(getSearchParams(searchOptions)).toEqual(
      `term=Queens+of+the+Stone+Age+Smooth+Sailing&media=music&entity=musicTrack`
    );
  });
});

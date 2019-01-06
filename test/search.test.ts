import {
  searchItunes,
  ItunesSearchOptions,
  ItunesResult,
  ItunesMedia,
  ItunesEntityMusic
} from "../src/index";

describe("Search", () => {
  test("Successful Search", () => {
    expect.assertions(1);

    const searchOptions = new ItunesSearchOptions({
      term: "Queen Bohemian Rhapsody"
    });

    return searchItunes(searchOptions).then((result: ItunesResult) => {
      return expect(result.resultCount).toBeGreaterThan(0);
    });
  });
});

describe("Search Format", () => {
  test("Media Format", () => {
    const term = "Queens of the Stone Age Smooth Sailing";
    const media = ItunesMedia.Music;
    const entity = ItunesEntityMusic.MusicTrack;

    const searchOptions = new ItunesSearchOptions({
      term: term,
      media: media,
      entity: entity
    });

    expect(searchOptions.toURI()).toBe(`term=${term}&media=${media}&entity=${entity}`);
  });
});

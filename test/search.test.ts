import { searchItunes, ItunesSearchOptions, ItunesResult } from "../src/index";

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

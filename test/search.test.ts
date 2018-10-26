import { ItunesSearchOptions, search } from "../src/search";
import { ItunesResult } from "../src/result";

describe("Search", () => {
  test("Successful Search", () => {
    expect.assertions(1);

    const searchOptions = new ItunesSearchOptions({
      term: "Queen Bohemian Rhapsody"
    });

    return search(searchOptions).then((result: ItunesResult) => {
      console.log(result);
      return expect(result.resultCount).toBeGreaterThan(0);
    });
  });
});

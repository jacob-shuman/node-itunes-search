import {ItunesProperties} from "./properties";

export class ItunesResult {
  // Number of results found
  readonly resultCount: number;

  // Results of search/lookup
  readonly results: Array<ItunesProperties>;

  // Parse an array of [ItunesProperties] objects from an array of raw results
  static parse(results: Array<any>): Array<ItunesProperties> {
    let parsedResults: Array<ItunesProperties> = [];

    results.forEach((result: any) => parsedResults.push(new ItunesProperties(result)));

    return parsedResults;
  }

  // Parse an [ItunesResults] from a JSON object
  static from(result: {resultCount: number; results: Array<ItunesProperties>}): ItunesResult {
    return new ItunesResult({
      resultCount: result.resultCount || 0,
      results: result.results ? this.parse(result.results) : []
    });
  }

  constructor(options: {resultCount: number; results: Array<ItunesProperties>}) {
    this.resultCount = options.resultCount;
    this.results = options.results;
  }
}

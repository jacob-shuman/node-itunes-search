export class ItunesResult {
  // Parse an [ItunesResult] from a JSON object
  static parse(result: any): ItunesResult {
    return new ItunesResult({
      resultCount: result.resultCount || 0,
      results: result.results || []
    });
  }

  // Number of results found
  readonly resultCount: number;

  // Results of search/lookup
  readonly results: Array<object>;

  constructor(options: { resultCount: number; results: Array<object> }) {
    this.resultCount = options.resultCount;
    this.results = options.results;
  }
}

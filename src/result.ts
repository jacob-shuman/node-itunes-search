export class ItunesResult {
  // Number of results found
  readonly resultCount: number;

  constructor(options: { resultCount: number }) {
    this.resultCount = options.resultCount;
  }
}

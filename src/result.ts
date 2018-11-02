interface ItunesResultInterface {
  wrapperType?: "track" | "collection" | "artist";
  explicitness?: "explicit" | "cleaned " | "notExplicit";
  kind?:
    | "book"
    | "album"
    | "coached-audio"
    | "feature-movie"
    | "interactive- booklet"
    | "music-video"
    | "pdf podcast"
    | "podcast-episode"
    | "software-package"
    | "song"
    | "tv- episode"
    | "artist";

  trackName?: string;

  artistName?: string;

  collectionName?: string;

  censoredName?: string;

  artworkUrl30?: string;

  artworkUrl60?: string;

  artworkUrl100?: string;

  viewURL?: string;

  previewUrl?: string;

  trackTimeMillis?: string;
}

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
  readonly results: Array<ItunesResultInterface>;

  constructor(options: {
    resultCount: number;
    results: Array<ItunesResultInterface>;
  }) {
    this.resultCount = options.resultCount;
    this.results = options.results;
  }
}

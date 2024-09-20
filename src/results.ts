export type ItunesWrapperType = "track" | "collection" | "artist";

export type ItunesKind =
  | "book"
  | "album"
  | "coached-audio"
  | "feature-movie"
  | "interactive-booklet"
  | "music-video"
  | "pdf podcast"
  | "podcast-episode"
  | "software-package"
  | "song"
  | "tv-episode"
  | "artist";

export type ItunesExplicitness = "explicit" | "cleaned " | "notExplicit";

export interface ItunesResults {
  resultCount: number;

  // Results of search/lookup
  results: (ItunesResult & { [key: string]: unknown })[];
}

export interface ItunesResult {
  wrapperType?: ItunesWrapperType;
  kind?: ItunesKind;

  artistId?: number;
  collectionId?: number;
  trackId?: number;

  artistName?: string;
  collectionName: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;

  collectionArtistId?: string;
  collectionArtistViewUrl?: string;
  artistViewUrl?: string;

  collectionViewUrl?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;

  trackRentalPrice?: number;
  trackHdRentalPrice?: number;
  collectionPrice?: number;
  trackPrice?: number;
  releaseDate?: string;

  collectionExplicitness?: ItunesExplicitness;
  trackExplicitness?: ItunesExplicitness;

  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;

  country?: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating?: string;
  shortDescription?: string;
  longDescription?: string;
  isStreamable?: boolean;
  hasITunesExtras?: boolean;
}

import {ItunesMedia} from "../media/media";
import {
  ItunesEntityMovie,
  ItunesEntityPodcast,
  ItunesEntityMusic,
  ItunesEntityMusicVideo,
  ItunesEntityAudioBook,
  ItunesEntityShortFilm,
  ItunesEntityTvShow,
  ItunesEntitySoftware,
  ItunesEntityEbook,
  ItunesEntityAll
} from "../media/entity";

export function toSearchUri(options: ISearchOptions): string {
  const searchTerm: string = "term=" + options.term;
  const searchCountry: string = options.country
    ? "&country=" + options.country
    : "";

  const searchMedia: string = options.media ? "&media=" + options.media : "";
  const searchEntity: string = options.entity
    ? "&entity=" + options.entity
    : "";

  const searchLimit: string = options.limit ? "&limit=" + options.limit : "";

  // Converting passed extra parameters
  const searchExtras = options.extras
    ? (() => {
        let extraParams = "";

        for (let param in options.extras) {
          extraParams += "&" + param + "=" + (options.extras as any)[param];
        }

        return extraParams;
      })()
    : "";

  return (
    searchTerm +
    searchCountry +
    searchMedia +
    searchEntity +
    searchLimit +
    searchExtras
  );
}

export interface ISearchOptions {
  // A query to search for.
  term: string;

  // TODO: Add ISO 3166 2 npm package to compare entry to valid countries.
  // A valid ISO 3166-1-alpha-2 country code.
  country?: string;

  // The type of media to search for, the default is 'all'
  media?: ItunesMedia;

  // The type of results wanted,
  entity?:
    | ItunesEntityMovie
    | ItunesEntityPodcast
    | ItunesEntityMusic
    | ItunesEntityMusicVideo
    | ItunesEntityAudioBook
    | ItunesEntityShortFilm
    | ItunesEntityTvShow
    | ItunesEntitySoftware
    | ItunesEntityEbook
    | ItunesEntityAll;

  // Maximum number of results to return.
  limit?: number;

  // Language to return the results in. (default is "en_us")
  lang?: "en_us" | "ja_jp";

  // JS object with any extra search parameters not found in this class.
  extras?: {};

  // Converts object to URI safe parameters
  toURI?: () => string;
}

export class ItunesSearchOptions {
  term: string;
  country?: string;
  media?: ItunesMedia;
  entity?:
    | ItunesEntityMovie
    | ItunesEntityPodcast
    | ItunesEntityMusic
    | ItunesEntityMusicVideo
    | ItunesEntityAudioBook
    | ItunesEntityShortFilm
    | ItunesEntityTvShow
    | ItunesEntitySoftware
    | ItunesEntityEbook
    | ItunesEntityAll;
  limit?: number;
  lang?: "en_us" | "ja_jp";
  extras?: {};

  constructor(options: {
    term: string;
    country?: string;
    media?: ItunesMedia;
    entity?:
      | ItunesEntityMovie
      | ItunesEntityPodcast
      | ItunesEntityMusic
      | ItunesEntityMusicVideo
      | ItunesEntityAudioBook
      | ItunesEntityShortFilm
      | ItunesEntityTvShow
      | ItunesEntitySoftware
      | ItunesEntityEbook
      | ItunesEntityAll;
    limit?: number;
    lang?: "en_us" | "ja_jp";
    extras?: object;
  }) {
    this.term = options.term;
    this.country = options.country;
    this.media = options.media;
    this.entity = options.entity;
    this.limit = options.limit;
    this.lang = options.lang;
    this.extras = options.extras;
  }

  // Converts object to URI safe parameters
  toURI = (): string => toSearchUri(this);

  static from = (options: ISearchOptions): ItunesSearchOptions =>
    new ItunesSearchOptions({
      term: options.term,
      country: options.country,
      media: options.media,
      entity: options.entity,
      limit: options.limit,
      lang: options.lang,
      extras: options.extras
    });
}

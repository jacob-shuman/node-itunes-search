import { ItunesMedia } from "../media/media";
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

export class ItunesSearchOptions {
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
  toURI() {
    const searchTerm: string = "term=" + this.term;
    const searchCountry: string = this.country
      ? "&country=" + this.country
      : "";

    const searchMedia: string = this.media ? "&media=" + this.media : "";
    const searchEntity: string = this.entity ? "&entity=" + this.entity : "";

    const searchLimit: string = this.limit ? "&limit=" + this.limit : "";

    // Converting passed extra parameters
    const searchExtras = this.extras
      ? (() => {
          let extraParams = "";

          for (let param in this.extras) {
            extraParams += "&" + param + "=" + (this.extras as any)[param];
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
}

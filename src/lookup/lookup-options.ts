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

export enum ItunesLookupType {
  ID = "id",
  AMGARTISTID = "amgArtistId",
  AMGALBUMID = "amgAlbumId",
  AMGVIDEOID = "amgVideoId",
  UPC = "upc",
  ISBN = "isbn"
}

export function toLookupUri(options: ILookupOptions): string {
  // Converting all keys to comma seperated string
  const lookupKeys: string = ((): string => {
    let keyParam = `${options.keyType.toString()}=`;

    options.keys.forEach((key, index) => {
      keyParam += (index > 0 ? "," : "") + key;
    });

    return keyParam;
  })();

  const lookupEntity: string = options.entity ? "&entity=" + options.entity : "";

  const lookupLimit: string = options.limit ? "&limit=" + options.limit : "";

  // Converting passed extra parameters
  const lookupExtras = options.extras
    ? (() => {
        let extraParams = "";

        for (let param in options.extras) {
          extraParams += "&" + param + "=" + (options.extras as any)[param];
        }

        return extraParams;
      })()
    : "";

  return lookupKeys + lookupEntity + lookupLimit + lookupExtras;
}

export interface ILookupOptions {
  // Primary lookup key
  keys: Array<string>;

  // Type of data the key represents
  keyType: ItunesLookupType;

  // The type of result wanted,
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

  // JS object with any extra search parameters not found in this class.
  extras?: {};

  toURI?: () => string;
}

export class ItunesLookupOptions implements ILookupOptions {
  keys: Array<string>;
  keyType: ItunesLookupType;
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
  extras?: {};

  constructor(options: {
    keys: Array<string>;
    keyType: ItunesLookupType;
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
    extras?: {};
  }) {
    this.keys = options.keys;
    this.keyType = options.keyType;
    this.entity = options.entity;
    this.limit = options.limit;
    this.extras = options.extras;
  }

  // TODO change to "toUri" for consistent naming
  // Converts object to URI safe parameters
  toURI = (): string => toLookupUri(this);

  static from = (options: ILookupOptions): ItunesLookupOptions =>
    new ItunesLookupOptions({
      keys: options.keys,
      keyType: options.keyType,
      entity: options.entity,
      limit: options.limit,
      extras: options.extras
    });
}

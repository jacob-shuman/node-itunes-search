import { ItunesMedia } from "./media";

export class ItunesSearchOptions {
  // A query to search for.
  term: string;

  // TODO: Add ISO 3166 2 npm package to compare entry to valid countries.
  // A valid ISO 3166-1-alpha-2 country code.
  country?: string;

  // The type of media to search for, the default is 'all'
  media: ItunesMedia;

  // Maximum number of results to return.
  limit?: number;

  // JS object with any extra search parameters not found in this class.
  extra?: object;
}

export function search(options: ItunesSearchOptions) {}

import type { ItunesEntities, ItunesResults } from "./mod";

/**
 * Known lookup parameters
 */
export type ItunesLookupOptions = {
  /**
   * The type of results wanted
   */
  entity?: ItunesEntities;

  /**
   * Maximum number of results to return (default is 50, range is 1 - 200)
   */
  limit?: string;

  id?: string | string[];
  isbn?: string | string[];
  upc?: string | string[];
  amgArtistId?: string | string[];
  amgAlbumId?: string | string[];
  amgVideoId?: string | string[];

  /**
   * "recent" is the only known value for this parameter
   */
  sort?: string;

  /**
   * Overrides all lookup params including top-level keys (useful if the api changes)
   */
  override?: Record<string, string | string[]>;
} & Record<string, string | string[]>;

/**
 * API endpoint for the lookup function
 */
export const ITUNES_LOOKUP_API_URL: string = "https://itunes.apple.com/lookup";

/**
 * Converts an {@link ItunesLookupOptions} object to a URL-encoded string of lookup parameters.
 *
 * @param {ItunesLookupOptions} options - The search parameters to encode.
 * @returns {string} A URL-encoded string of search parameters.
 */
export function getLookupParams(options: ItunesLookupOptions): string {
  const params = new URLSearchParams();

  const setParams = (entries: [string, undefined | string | string[]][]) => {
    for (let [k, v] of entries) {
      if (v && v.length > 0) {
        params.set(k, Array.isArray(v) ? v.join(",") : v.toString());
      }
    }
  };

  setParams(Object.entries({ ...options, override: undefined }));

  // Converting passed extra parameters
  if (options.override) {
    setParams(Object.entries(options.override));
  }

  return params.toString();
}

/**
 * Performs a lookup using the provided options.
 *
 * @param {ItunesLookupOptions} options - The lookup options to use (e.g. entity, limit).
 * @see {@link https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/LookupExamples.html#//apple_ref/doc/uid/TP40017632-CH7-SW1} for official lookup examples
 * @see {@link ITUNES_LOOKUP_API_URL} for endpoint
 * @returns {Promise<ItunesResults>} A promise resolving to the lookup results.
 */
export async function lookupItunes(
  options: ItunesLookupOptions
): Promise<ItunesResults> {
  const res = await fetch(
    `${ITUNES_LOOKUP_API_URL}?${getLookupParams(options)}`
  );

  if (!res.ok) {
    throw res;
  }

  return await res.json();
}

import { Iso3166CountryCode } from "./iso3166";
import { ItunesMediaQuery } from "./media";
import { ItunesResults } from "./results";

/**
 * Known search params
 */
export type ItunesSearchOptions = {
  /**
   * A query to search for
   */
  term: string;

  /**
   * A valid ISO 3166-1 (alpha-2) country code
   */
  country?: Iso3166CountryCode;

  /**
   * The name of the Javascript callback function you want to use when returning search results to your website.
   */
  callback?: string;

  /**
   * Maximum number of results to return (default is 50, range is 1 - 200)
   */
  limit?: string;

  /**
   * Language to return the results in (default is "en_us")
   */
  lang?:
    | "en_us" // English
    | "ja_jp"; // Japanese

  /**
   * Search key result version (known values are "1" and "2", default is 2)
   */
  version?: string;

  /**
   * Indicates if you want to include explicit content in the results (default is "Yes")
   */
  explicit?: "Yes" | "No";

  /**
   * Overrides all search params including top-level keys (useful if the api changes)
   */
  override?: Record<string, string | string[]>;
} & ItunesMediaQuery &
  Record<string, string | string[]>;

/**
 * API endpoint for the search function
 */
export const ITUNES_SEARCH_API_URL: string = "https://itunes.apple.com/search";

/**
 * Converts an {@link ItunesSearchOptions} object to a URL-encoded string of search parameters.
 *
 * @param {ItunesSearchOptions} options - The search parameters to encode.
 * @returns {string} A URL-encoded string of search parameters.
 */
export function getSearchParams(options: ItunesSearchOptions): string {
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
 * Performs a search using the provided options.
 *
 * @param {ItunesSearchOptions} options - The search options to use (e.g. term, country).
 * @see {@link https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1} for official search documentation
 * @see {@link https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/SearchExamples.html#//apple_ref/doc/uid/TP40017632-CH6-SW1} for official search examples
 * @see {@link ITUNES_SEARCH_API_URL} for endpoint
 * @returns {Promise<ItunesResults>} A promise resolving to the search results.
 */
export async function searchItunes(
  options: ItunesSearchOptions
): Promise<ItunesResults> {
  const res = await fetch(
    `${ITUNES_SEARCH_API_URL}?${getSearchParams(options)}`
  );

  if (!res.ok) {
    throw res;
  }

  return await res.json();
}

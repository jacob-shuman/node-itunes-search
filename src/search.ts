import { ItunesEntity } from "./entity";
import { Iso3166CountryCode } from "./iso3166";
import { ItunesMedia } from "./media";
import { ItunesResults } from "./results";

export type ItunesSearchOptions = {
  // A query to search for
  term: string;

  // A valid ISO 3166-1 (alpha-2) country code
  country?: Iso3166CountryCode;

  // The type of media to search for, the default is "all"
  media?: ItunesMedia;

  // The type of results wanted
  entity?: ItunesEntity;

  // TODO: add attribute and callback, entity and attribute are tied to each other

  // Maximum number of results to return (default is 50, range is 1 - 200)
  limit?: string;

  // Language to return the results in (default is "en_us")
  lang?: "en_us" | "ja_jp";

  // Search key result version (default is 2)
  version?: string;

  // Indicates if you want to include explicit content in the results (default is "Yes")
  explicit?: "Yes" | "No";

  // params that override all search params including top-level keys (useful if the api changes)
  override?: Record<string, string | string[]>;
} & Record<string, string | string[]>;

export const ITUNES_SEARCH_API_URL: string = "https://itunes.apple.com/search";

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

import { ItunesEntity } from "./entity";
import { Iso3166CountryCode } from "./iso3166";
import { ItunesMedia } from "./media";
import { ItunesResults } from "./results";

export interface ItunesSearchOptions {
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
  limit?: number;

  // Language to return the results in (default is "en_us")
  lang?: "en_us" | "ja_jp";

  // Search key result version (default is 2)
  version?: number;

  // Indicates if you want to include explicit content in the results (default is "Yes")
  explicit?: "Yes" | "No";

  // extra search parameters to include that aren't found in this interface
  extras?: Record<string, string>;
}

export const ITUNES_SEARCH_API_URL: string = "https://itunes.apple.com/search";

export function getSearchParams(options: ItunesSearchOptions): string {
  const params = new URLSearchParams();
  const appendParam = (k: string, v: string | string[] = "") => {
    if (v.length > 0) {
      params.append(k, typeof v === "string" ? v : v.join(","));
    }
  };

  appendParam("term", options.term);
  appendParam("country", options.country);
  appendParam("media", options.media);
  appendParam("entity", options.entity);
  appendParam("limit", options.limit?.toString());

  // Converting passed extra parameters
  for (let [k, v] of Object.entries(options.extras ?? {})) {
    appendParam(k, v);
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

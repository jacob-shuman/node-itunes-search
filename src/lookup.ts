import type { ItunesEntity, ItunesResults } from "./mod";

export type ItunesLookupOptions = {
  // The type of results wanted
  entity?: ItunesEntity;

  // Maximum number of results to return (default is 50, range is 1 - 200)
  limit?: string;

  id?: string | string[];
  isbn?: string | string[];
  upc?: string | string[];
  amgArtistId?: string | string[];
  amgAlbumId?: string | string[];
  amgVideoId?: string | string[];

  // "recent" is the only known value for this parameter
  sort?: string;

  // params that override all lookup params (can also be used to override this type if it becomes outdated)
  override?: Record<string, string | string[]>;
} & Record<string, string | string[]>;

export const ITUNES_LOOKUP_API_URL: string = "https://itunes.apple.com/lookup";

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

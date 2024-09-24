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

  // extra lookup parameters to include that aren't found in this interface (can also be used to override this type if it becomes outdated)
  extras?: Record<string, string | string[]>;
} & Record<string, string | string[]>;

export const ITUNES_LOOKUP_API_URL: string = "https://itunes.apple.com/lookup";

export function getLookupParams(options: ItunesLookupOptions): string {
  const params = new URLSearchParams();

  const appendParams = (entries: [string, undefined | string | string[]][]) => {
    for (let [k, v] of entries) {
      if (v != undefined && v.length > 0) {
        params.append(k, Array.isArray(v) ? v.join(",") : v.toString());
      }
    }
  };

  appendParams(Object.entries({ ...options, extras: undefined }));

  // Converting passed extra parameters
  if (options.extras) {
    appendParams(Object.entries(options.extras));
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

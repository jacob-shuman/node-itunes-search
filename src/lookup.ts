import {
  ItunesEntityAll,
  ItunesEntityAudioBook,
  ItunesEntityEbook,
  ItunesEntityMovie,
  ItunesEntityMusic,
  ItunesEntityMusicVideo,
  ItunesEntityPodcast,
  ItunesEntityShortFilm,
  ItunesEntitySoftware,
  ItunesEntityTvShow,
  ItunesResults,
} from "./mod";

export interface ItunesLookupOptions {
  // The type of results wanted
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

  // Maximum number of results to return (default is 50, range is 1 - 200)
  limit?: number;

  id?: string | string[];
  isbn?: string | string[];
  upc?: string | string[];
  amgArtistId?: string | string[];
  amgAlbumId?: string | string[];
  amgVideoId?: string | string[];

  // "recent" is the only known value for this parameter
  sort?: string;

  // extra search parameters to include that aren't found in this interface
  extras?: Record<string, string>;
}

export const ITUNES_LOOKUP_API_URL: string = "https://itunes.apple.com/lookup";

export function getLookupParams(options: ItunesLookupOptions): string {
  const params = new URLSearchParams();
  const appendParam = (k: string, v: string | string[] = "") => {
    if (v.length > 0) {
      params.append(k, typeof v === "string" ? v : v.join(","));
    }
  };

  appendParam("id", options.id);
  appendParam("isbn", options.isbn);
  appendParam("upc", options.upc);
  appendParam("amgArtistId", options.amgArtistId);
  appendParam("amgAlbumId", options.amgAlbumId);
  appendParam("amgVideoId", options.amgVideoId);
  appendParam("entity", options.entity);
  appendParam("sort", options.sort);
  appendParam("limit", options.limit?.toString());

  // Converting passed extra parameters
  for (let [k, v] of Object.entries(options.extras ?? {})) {
    appendParam(k, v);
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

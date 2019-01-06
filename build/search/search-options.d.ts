import { ItunesMedia } from "../media/media";
import { ItunesEntityMovie, ItunesEntityPodcast, ItunesEntityMusic, ItunesEntityMusicVideo, ItunesEntityAudioBook, ItunesEntityShortFilm, ItunesEntityTvShow, ItunesEntitySoftware, ItunesEntityEbook, ItunesEntityAll } from "../media/entity";
export declare function toSearchUri(options: ISearchOptions): string;
export interface ISearchOptions {
    term: string;
    country?: string;
    media?: ItunesMedia;
    entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
    limit?: number;
    lang?: "en_us" | "ja_jp";
    extras?: {};
    toURI?: () => string;
}
export declare class ItunesSearchOptions {
    term: string;
    country?: string;
    media?: ItunesMedia;
    entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
    limit?: number;
    lang?: "en_us" | "ja_jp";
    extras?: {};
    constructor(options: {
        term: string;
        country?: string;
        media?: ItunesMedia;
        entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
        limit?: number;
        lang?: "en_us" | "ja_jp";
        extras?: object;
    });
    toURI: () => string;
    static from: (options: ISearchOptions) => ItunesSearchOptions;
}

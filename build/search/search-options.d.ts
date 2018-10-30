import { ItunesMedia } from "../media/media";
import { ItunesEntityMovie, ItunesEntityPodcast, ItunesEntityMusic, ItunesEntityMusicVideo, ItunesEntityAudioBook, ItunesEntityShortFilm, ItunesEntityTvShow, ItunesEntitySoftware, ItunesEntityEbook, ItunesEntityAll } from "../media/entity";
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
    toURI(): string;
}

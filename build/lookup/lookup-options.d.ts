import { ItunesEntityMovie, ItunesEntityPodcast, ItunesEntityMusic, ItunesEntityMusicVideo, ItunesEntityAudioBook, ItunesEntityShortFilm, ItunesEntityTvShow, ItunesEntitySoftware, ItunesEntityEbook, ItunesEntityAll } from "../media/entity";
export declare enum ItunesLookupType {
    ID = "id",
    AMGARTISTID = "amgArtistId",
    AMGALBUMID = "amgAlbumId",
    AMGVIDEOID = "amgVideoId",
    UPC = "upc",
    ISBN = "isbn"
}
export declare class ItunesLookupOptions {
    keys: Array<string>;
    keyType: ItunesLookupType;
    entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
    limit?: number;
    extras?: {};
    constructor(options: {
        keys: Array<string>;
        keyType: ItunesLookupType;
        entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
        limit?: number;
        extras?: {};
    });
    toURI(): string;
}

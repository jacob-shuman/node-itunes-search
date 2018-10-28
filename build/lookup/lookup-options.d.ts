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
    limit?: number;
    extras?: {};
    constructor(options: {
        keys: Array<string>;
        keyType: ItunesLookupType;
        limit?: number;
        extras?: {};
    });
    toURI(): string;
}

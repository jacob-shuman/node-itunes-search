interface ItunesResultInterface {
    wrapperType?: "track" | "collection" | "artist";
    explicitness?: "explicit" | "cleaned " | "notExplicit";
    kind?: "book" | "album" | "coached-audio" | "feature-movie" | "interactive- booklet" | "music-video" | "pdf podcast" | "podcast-episode" | "software-package" | "song" | "tv- episode" | "artist";
    trackName?: string;
    artistName?: string;
    collectionName?: string;
    censoredName?: string;
    artworkUrl30?: string;
    artworkUrl60?: string;
    artworkUrl100?: string;
    viewURL?: string;
    previewUrl?: string;
    trackTimeMillis?: string;
}
export declare class ItunesResult {
    static parse(result: any): ItunesResult;
    readonly resultCount: number;
    readonly results: Array<ItunesResultInterface>;
    constructor(options: {
        resultCount: number;
        results: Array<ItunesResultInterface>;
    });
}
export {};

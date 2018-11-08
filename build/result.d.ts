export declare class ItunesResult {
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
    constructor(options: {
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
    });
}
export declare class ItunesResults {
    static parse(results: Array<any>): Array<ItunesResult>;
    static from(result: {
        resultCount: number;
        results: Array<any>;
    }): ItunesResults;
    readonly resultCount: number;
    readonly results: Array<ItunesResult>;
    constructor(options: {
        resultCount: number;
        results: Array<ItunesResult>;
    });
}

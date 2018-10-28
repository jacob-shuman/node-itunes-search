import { ItunesMedia } from "../media";
export declare class ItunesSearchOptions {
    term: string;
    country?: string;
    media?: ItunesMedia;
    limit?: number;
    extras?: {};
    constructor(options: {
        term: string;
        country?: string;
        media?: ItunesMedia;
        limit?: number;
        extras?: object;
    });
    toURI(): string;
}

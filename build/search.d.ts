import { ItunesMedia } from "./media";
import { ItunesResult } from "./result";
export declare class ItunesSearchOptions {
    term: string;
    country?: string;
    media?: ItunesMedia;
    limit?: number;
    extras?: {};
    toURI: () => string;
    constructor(options: {
        term: string;
        country?: string;
        media?: ItunesMedia;
        limit?: number;
        extras?: object;
    });
}
export declare function searchItunes(options: ItunesSearchOptions): Promise<ItunesResult>;

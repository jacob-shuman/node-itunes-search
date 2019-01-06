import { ItunesResult } from "../result/result";
import { ISearchOptions, ItunesSearchOptions } from "./search-options";
export declare const itunesSearchRoot = "https://itunes.apple.com/search";
export declare function searchItunes(options: ISearchOptions | ItunesSearchOptions): Promise<ItunesResult>;

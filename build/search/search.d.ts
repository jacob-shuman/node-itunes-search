import { ItunesResult } from "../result/result";
import { ItunesSearchOptions } from "./search-options";
export declare const itunesSearchRoot = "https://itunes.apple.com/search";
export declare function searchItunes(options: ItunesSearchOptions): Promise<ItunesResult>;

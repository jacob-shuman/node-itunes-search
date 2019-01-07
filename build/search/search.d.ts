import { ItunesResult } from "../result/result";
import { ISearchOptions, ItunesSearchOptions } from "./search-options";
export declare const itunesSearchRoot: string;
export declare function searchItunes(options: ISearchOptions | ItunesSearchOptions): Promise<ItunesResult>;

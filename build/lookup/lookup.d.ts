import { ItunesResult } from "../result/result";
import { ItunesLookupOptions } from "./lookup-options";
export declare const itunesLookupRoot = "https://itunes.apple.com/lookup";
export declare function lookupItunes(options: ItunesLookupOptions): Promise<ItunesResult>;

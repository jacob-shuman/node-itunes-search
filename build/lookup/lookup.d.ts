import { ItunesResult } from "../result/result";
import { ILookupOptions, ItunesLookupOptions } from "./lookup-options";
export declare const itunesLookupRoot: string;
export declare function lookupItunes(options: ILookupOptions | ItunesLookupOptions): Promise<ItunesResult>;

import { ItunesProperties } from "./properties";
export declare class ItunesResult {
    readonly resultCount: number;
    readonly results: Array<ItunesProperties>;
    static parse(results: Array<any>): Array<ItunesProperties>;
    static from(result: {
        resultCount: number;
        results: Array<ItunesProperties>;
    }): ItunesResult;
    constructor(options: {
        resultCount: number;
        results: Array<ItunesProperties>;
    });
}

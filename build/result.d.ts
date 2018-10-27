export declare class ItunesResult {
    static parse(result: any): ItunesResult;
    readonly resultCount: number;
    readonly results: Array<object>;
    constructor(options: {
        resultCount: number;
        results: Array<object>;
    });
}

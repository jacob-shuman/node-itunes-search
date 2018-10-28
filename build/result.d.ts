interface ItunesResultInterface {
}
export declare class ItunesResult {
    static parse(result: any): ItunesResult;
    readonly resultCount: number;
    readonly results: Array<ItunesResultInterface>;
    constructor(options: {
        resultCount: number;
        results: Array<ItunesResultInterface>;
    });
}
export {};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItunesResult {
    constructor(options) {
        // Adding known result keys
        this.wrapperType = options.wrapperType;
        this.explicitness = options.explicitness;
        this.kind = options.kind;
        this.trackName = options.trackName;
        this.artistName = options.artistName;
        this.collectionName = options.collectionName;
        this.censoredName = options.censoredName;
        this.artworkUrl30 = options.artworkUrl30;
        this.artworkUrl60 = options.artworkUrl60;
        this.artworkUrl100 = options.artworkUrl100;
        this.viewURL = options.viewURL;
        this.previewUrl = options.previewUrl;
        this.trackTimeMillis = options.trackTimeMillis;
        // Adding remaining unknonw keys
        for (let key in options) {
        }
    }
}
exports.ItunesResult = ItunesResult;
class ItunesResults {
    // Parse an array of [ItunesResult] objects from an array of raw results
    static parse(results) {
        let parsedResults = [];
        results.forEach((result) => {
            parsedResults.push(new ItunesResult(result));
        });
        return parsedResults;
    }
    // Parse an [ItunesResults] from a JSON object
    static from(result) {
        return new ItunesResults({
            resultCount: result.resultCount || 0,
            // results: result.results || []
            results: result.results ? this.parse(result.results) : []
        });
    }
    constructor(options) {
        this.resultCount = options.resultCount;
        this.results = options.results;
    }
}
exports.ItunesResults = ItunesResults;

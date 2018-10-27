"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItunesResult {
    // Parse an [ItunesResult] from a JSON object
    static parse(result) {
        return new ItunesResult({
            resultCount: result.resultCount || 0,
            results: result.results || []
        });
    }
    constructor(options) {
        this.resultCount = options.resultCount;
        this.results = options.results;
    }
}
exports.ItunesResult = ItunesResult;

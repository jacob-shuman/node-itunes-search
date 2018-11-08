"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const properties_1 = require("./properties");
class ItunesResult {
    // Parse an array of [ItunesProperties] objects from an array of raw results
    static parse(results) {
        let parsedResults = [];
        results.forEach((result) => parsedResults.push(new properties_1.ItunesProperties(result)));
        return parsedResults;
    }
    // Parse an [ItunesResults] from a JSON object
    static from(result) {
        return new ItunesResult({
            resultCount: result.resultCount || 0,
            results: result.results ? this.parse(result.results) : []
        });
    }
    constructor(options) {
        this.resultCount = options.resultCount;
        this.results = options.results;
    }
}
exports.ItunesResult = ItunesResult;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("./result");
class ItunesSearchOptions {
    constructor(options) {
        // Converts object to URI safe parameters
        this.toURI = () => {
            const searchTerm = "term=" + this.term;
            const searchCountry = this.country
                ? "&country=" + this.country
                : "";
            const searchMedia = this.media ? "&media=" + this.media : "";
            const searchLimit = this.limit ? "&limit=" + this.limit : "";
            // Converting passed extra parameters
            const searchExtras = this.extras
                ? (() => {
                    let extraParams = "";
                    for (let param in this.extras) {
                        extraParams += "&" + param + "=" + this.extras[param];
                    }
                    return extraParams;
                })()
                : "";
            return "?" + searchTerm + searchCountry + searchMedia + searchLimit;
        };
        this.term = options.term;
        this.country = options.country;
        this.media = options.media;
        this.limit = options.limit;
        this.extras = options.extras;
    }
}
exports.ItunesSearchOptions = ItunesSearchOptions;
function searchItunes(options) {
    const itunesSearchRoot = "https://itunes.apple.com/search";
    return new Promise((resolve, reject) => {
        const phin = require("phin");
        phin(`${itunesSearchRoot}${options.toURI()}`, (err, res) => {
            // TODO Use ItunesResult instead for type preservation.
            if (err) {
                reject(err);
            }
            else {
                res.body = JSON.parse(res.body);
                resolve(result_1.ItunesResult.parse(res.body));
            }
        });
    });
}
exports.searchItunes = searchItunes;

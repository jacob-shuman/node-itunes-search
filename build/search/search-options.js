"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItunesSearchOptions {
    constructor(options) {
        this.term = options.term;
        this.country = options.country;
        this.media = options.media;
        this.entity = options.entity;
        this.limit = options.limit;
        this.lang = options.lang;
        this.extras = options.extras;
    }
    // Converts object to URI safe parameters
    toURI() {
        const searchTerm = "term=" + this.term;
        const searchCountry = this.country
            ? "&country=" + this.country
            : "";
        const searchMedia = this.media ? "&media=" + this.media : "";
        const searchEntity = this.entity ? "&entity=" + this.entity : "";
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
        return (searchTerm +
            searchCountry +
            searchMedia +
            searchEntity +
            searchLimit +
            searchExtras);
    }
}
exports.ItunesSearchOptions = ItunesSearchOptions;

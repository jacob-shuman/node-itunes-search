"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItunesSearchOptions {
    constructor(options) {
        this.term = options.term;
        this.country = options.country;
        this.media = options.media;
        this.limit = options.limit;
        this.extras = options.extras;
    }
    // Converts object to URI safe parameters
    toURI() {
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
        return (searchTerm + searchCountry + searchMedia + searchLimit + searchExtras);
    }
}
exports.ItunesSearchOptions = ItunesSearchOptions;

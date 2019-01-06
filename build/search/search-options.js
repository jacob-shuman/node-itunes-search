"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toSearchUri(options) {
    const searchTerm = "term=" + options.term;
    const searchCountry = options.country ? "&country=" + options.country : "";
    const searchMedia = options.media ? "&media=" + options.media : "";
    const searchEntity = options.entity ? "&entity=" + options.entity : "";
    const searchLimit = options.limit ? "&limit=" + options.limit : "";
    // Converting passed extra parameters
    const searchExtras = options.extras
        ? (() => {
            let extraParams = "";
            for (let param in options.extras) {
                extraParams += "&" + param + "=" + options.extras[param];
            }
            return extraParams;
        })()
        : "";
    return searchTerm + searchCountry + searchMedia + searchEntity + searchLimit + searchExtras;
}
exports.toSearchUri = toSearchUri;
class ItunesSearchOptions {
    constructor(options) {
        // Converts object to URI safe parameters
        this.toURI = () => toSearchUri(this);
        this.term = options.term;
        this.country = options.country;
        this.media = options.media;
        this.entity = options.entity;
        this.limit = options.limit;
        this.lang = options.lang;
        this.extras = options.extras;
    }
}
ItunesSearchOptions.from = (options) => new ItunesSearchOptions({
    term: options.term,
    country: options.country,
    media: options.media,
    entity: options.entity,
    limit: options.limit,
    lang: options.lang,
    extras: options.extras
});
exports.ItunesSearchOptions = ItunesSearchOptions;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItunesLookupType;
(function (ItunesLookupType) {
    ItunesLookupType["ID"] = "id";
    ItunesLookupType["AMGARTISTID"] = "amgArtistId";
    ItunesLookupType["AMGALBUMID"] = "amgAlbumId";
    ItunesLookupType["AMGVIDEOID"] = "amgVideoId";
    ItunesLookupType["UPC"] = "upc";
    ItunesLookupType["ISBN"] = "isbn";
})(ItunesLookupType = exports.ItunesLookupType || (exports.ItunesLookupType = {}));
function toLookupUri(options) {
    // Converting all keys to comma seperated string
    const lookupKeys = (() => {
        let keyParam = `${options.keyType.toString()}=`;
        options.keys.forEach((key, index) => {
            keyParam += (index > 0 ? "," : "") + key;
        });
        return keyParam;
    })();
    const lookupEntity = options.entity ? "&entity=" + options.entity : "";
    const lookupLimit = options.limit ? "&limit=" + options.limit : "";
    // Converting passed extra parameters
    const lookupExtras = options.extras
        ? (() => {
            let extraParams = "";
            for (let param in options.extras) {
                extraParams += "&" + param + "=" + options.extras[param];
            }
            return extraParams;
        })()
        : "";
    return lookupKeys + lookupEntity + lookupLimit + lookupExtras;
}
exports.toLookupUri = toLookupUri;
class ItunesLookupOptions {
    constructor(options) {
        // TODO change to "toUri" for consistent naming
        // Converts object to URI safe parameters
        this.toURI = () => toLookupUri(this);
        this.keys = options.keys;
        this.keyType = options.keyType;
        this.entity = options.entity;
        this.limit = options.limit;
        this.extras = options.extras;
    }
}
ItunesLookupOptions.from = (options) => new ItunesLookupOptions({
    keys: options.keys,
    keyType: options.keyType,
    entity: options.entity,
    limit: options.limit,
    extras: options.extras
});
exports.ItunesLookupOptions = ItunesLookupOptions;

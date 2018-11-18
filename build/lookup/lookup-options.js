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
class ItunesLookupOptions {
    constructor(options) {
        this.keys = options.keys;
        this.keyType = options.keyType;
        this.entity = options.entity;
        this.limit = options.limit;
        this.extras = options.extras;
    }
    // Converts object to URI safe parameters
    toURI() {
        // Converting all keys to comma seperated string
        const lookupKeys = (() => {
            let keyParam = `${this.keyType.toString()}=`;
            this.keys.forEach((key, index) => {
                keyParam += (index > 0 ? "," : "") + key;
            });
            return keyParam;
        })();
        const lookupEntity = this.entity ? "&entity=" + this.entity : "";
        const lookupLimit = this.limit ? "&limit=" + this.limit : "";
        // Converting passed extra parameters
        const lookupExtras = this.extras
            ? (() => {
                let extraParams = "";
                for (let param in this.extras) {
                    extraParams += "&" + param + "=" + this.extras[param];
                }
                return extraParams;
            })()
            : "";
        return lookupKeys + lookupEntity + lookupLimit + lookupExtras;
    }
}
exports.ItunesLookupOptions = ItunesLookupOptions;

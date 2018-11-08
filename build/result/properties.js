"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItunesProperties {
    constructor(options) {
        this.wrapperType = options.wrapperType;
        this.kind = options.kind;
        this.artistId = options.artistId;
        this.collectionId = options.collectionId;
        this.trackId = options.trackId;
        this.artistName = options.artistName;
        this.collectionName = options.collectionName;
        this.trackName = options.trackName;
        this.censoredName = options.censoredName;
        this.collectionCensoredName = options.collectionCensoredName;
        this.trackCensoredName = options.trackCensoredName;
        this.artistViewUrl = options.artistViewUrl;
        this.collectionViewUrl = options.collectionViewUrl;
        this.trackViewUrl = options.trackViewUrl;
        this.viewURL = options.viewURL;
        this.previewUrl = options.previewUrl;
        this.artworkUrl30 = options.artworkUrl30;
        this.artworkUrl60 = options.artworkUrl60;
        this.artworkUrl100 = options.artworkUrl100;
        this.collectionPrice = options.collectionPrice;
        this.trackPrice = options.trackPrice;
        this.releaseDate = options.releaseDate;
        this.collectionExplicitness = options.collectionExplicitness;
        this.trackExplicitness = options.trackExplicitness;
        this.discCount = options.discCount;
        this.discNumber = options.discNumber;
        this.trackCount = options.trackCount;
        this.trackNumber = options.trackNumber;
        this.trackTimeMillis = options.trackTimeMillis;
        this.country = options.country;
        this.currency = options.currency;
        this.primaryGenreName = options.primaryGenreName;
        this.isStreamable = options.isStreamable;
        this.raw = options;
    }
}
exports.ItunesProperties = ItunesProperties;

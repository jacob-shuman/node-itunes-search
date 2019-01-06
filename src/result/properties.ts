import {ItunesKind} from "./kind";
import {ItunesExplicitness} from "./explicitness";
import {ItunesWrapperType} from "./wrapper-type";

export class ItunesProperties {
  readonly wrapperType?: ItunesWrapperType;
  readonly kind?: ItunesKind;

  readonly artistId?: number;
  readonly collectionId?: number;
  readonly trackId?: number;

  readonly artistName?: string;
  readonly collectionName: string;
  readonly trackName?: string;
  readonly collectionCensoredName?: string;
  readonly trackCensoredName?: string;

  readonly artistViewUrl?: string;
  readonly collectionViewUrl?: string;
  readonly trackViewUrl?: string;
  readonly previewUrl?: string;
  readonly artworkUrl30?: string;
  readonly artworkUrl60?: string;
  readonly artworkUrl100?: string;

  readonly collectionPrice?: number;
  readonly trackPrice?: number;
  readonly releaseDate?: string;

  readonly collectionExplicitness?: ItunesExplicitness;
  readonly trackExplicitness?: ItunesExplicitness;

  readonly discCount?: number;
  readonly discNumber?: number;
  readonly trackCount?: number;
  readonly trackNumber?: number;
  readonly trackTimeMillis?: number;

  readonly country?: string;
  readonly currency?: string;
  readonly primaryGenreName?: string;
  readonly isStreamable?: boolean;

  // Raw JSON object recieved from search/lookup action
  // Useful in case [ItunesProperties] is missing a field (Warning: this will not preserve types)
  readonly raw: object;

  constructor(options: any) {
    this.wrapperType = options.wrapperType;
    this.kind = options.kind;

    this.artistId = options.artistId;
    this.collectionId = options.collectionId;
    this.trackId = options.trackId;

    this.artistName = options.artistName;
    this.collectionName = options.collectionName;
    this.trackName = options.trackName;
    this.collectionCensoredName = options.collectionCensoredName;
    this.trackCensoredName = options.trackCensoredName;

    this.artistViewUrl = options.artistViewUrl;
    this.collectionViewUrl = options.collectionViewUrl;
    this.trackViewUrl = options.trackViewUrl;
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

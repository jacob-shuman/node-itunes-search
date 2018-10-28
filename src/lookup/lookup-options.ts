export enum ItunesLookupType {
  ID = "id",
  AMGARTISTID = "amgArtistId",
  AMGALBUMID = "amgAlbumId",
  AMGVIDEOID = "amgVideoId",
  UPC = "upc",
  ISBN = "isbn"
}

export class ItunesLookupOptions {
  // Primary lookup key
  keys: Array<string>;

  // Type of data the key represents
  keyType: ItunesLookupType;

  // Maximum number of results to return.
  limit?: number;

  // JS object with any extra search parameters not found in this class.
  extras?: {};

  constructor(options: {
    keys: Array<string>;
    keyType: ItunesLookupType;
    limit?: number;
    extras?: {};
  }) {
    this.keys = options.keys;
    this.keyType = options.keyType;
    this.limit = options.limit;
    this.extras = options.extras;
  }

  // Converts object to URI safe parameters
  toURI(): string {
    // Converting all keys to comma seperated string
    const lookupKeys: string = ((): string => {
      let keyParam = `${this.keyType.toString()}=`;

      this.keys.forEach((key, index) => {
        keyParam += (index > 0 ? "," : "") + key;
      });

      return keyParam;
    })();

    const lookupLimit: string = this.limit ? "&limit=" + this.limit : "";

    // Converting passed extra parameters
    const lookupExtras = this.extras
      ? (() => {
          let extraParams = "";

          for (let param in this.extras) {
            extraParams += "&" + param + "=" + (this.extras as any)[param];
          }

          return extraParams;
        })()
      : "";

    return lookupKeys + lookupLimit + lookupExtras;
  }
}

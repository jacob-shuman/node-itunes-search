# `node-itunes-search`

> A wrapper around the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1)
>
> _"The Search API allows you to place search fields in your website to search for content within the iTunes Store, App Store, iBooks Store and Mac App Store."_

## Installation

<a href="https://www.npmjs.com/package/node-itunes-search">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/npm-node--itunes--search-cb3837?style=for-the-badge&logo=npm&labelColor=202020&logoColor=cb3837" />
		<img alt="npm badge" src="https://img.shields.io/badge/npm-node--itunes--search-cb3837?style=for-the-badge&logo=npm&labelColor=f0f0f0&logoColor=cb3837" />
	</picture>
</a>

```bash
npm install node-itunes-search
```

<a href="https://jsr.io/@nullbitme/search-itunes">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/jsr-@nullbitme/search--itunes-f3e050?style=for-the-badge&logo=jsr&labelColor=202020&logoColor=f3e050" />
		<img alt="jsr badge" src="https://img.shields.io/badge/jsr-@nullbitme/search--itunes-f3e050?style=for-the-badge&logo=jsr&labelColor=f0f0f0&logoColor=163242" />
	</picture>
</a>

```bash
npx jsr add @nullbitme/search-itunes
```

## Usage

This module exposes 2 functions `searchItunes` and `lookupItunes` which can be used to search and lookup content using the Itunes Search API respectively. Both functions return a promise for a `ItunesResults` object with the following structure:

```ts
interface ItunesResults {
  resultCount: number;

  // Results of search/lookup
  results: (ItunesResult & { [key: string]: unknown })[];
}

interface ItunesResults {
  wrapperType?: ItunesWrapperType;
  kind?: ItunesKind;
  artistId?: number;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionArtistId?: string;
  collectionArtistViewUrl?: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  trackRentalPrice?: number;
  trackHdRentalPrice?: number;
  collectionPrice?: number;
  trackPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: ItunesExplicitness;
  trackExplicitness?: ItunesExplicitness;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating?: string;
  shortDescription?: string;
  longDescription?: string;
  isStreamable?: boolean;
  hasITunesExtras?: boolean;
}
```

This is **not** an exhaustive list of all possible properties on an `ItunesResult` due to the _limited_ api documentation. `ItunesResult` contains many of the most common properties that _could_ be on a result after reading the documentation and a bit of experimentation.

### Search

[Search for content using the Itunes Search API. This function requires a `term` string to perform a search.](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1)

```ts
async function searchItunes(
  options: ItunesSearchOptions
): Promise<ItunesResults>;
```

### Lookup

<!-- TODO: some description -->

[_"You can also create a lookup request to search for content in the stores based on iTunes IDs, UPCs/ EANs, and All Music Guide (AMG) IDs. ID-based lookups are faster and contain fewer false-positive results."_](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/LookupExamples.html#//apple_ref/doc/uid/TP40017632-CH7-SW1)

```ts
async function lookupItunes(
  options: ItunesLookupOptions
): Promise<ItunesResults>;
```

## Examples

### Song Search

```ts
// npm
import { searchItunes } from "node-itunes-search";
// jsr
import { searchItunes } from "@nullbitme/search-itunes";

const results = await searchItunes({
  // Search Query
  term: "Queen Bohemian Rhapsody",

  // Setting max number of results to 2
  limit: 2,
});

console.log(results);
```

```json
{
  "resultCount": 2,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 3296287,
      "collectionId": 1434899831,
      "trackId": 1434899925,
      "artistName": "Queen",
      "collectionName": "Bohemian Rhapsody (The Original Soundtrack)",
      "trackName": "Killer Queen",
      "collectionCensoredName": "Bohemian Rhapsody (The Original Soundtrack)",
      "trackCensoredName": "Killer Queen (2011 Remaster)",
      "artistViewUrl": "https://music.apple.com/us/artist/queen/3296287?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/killer-queen-2011-remaster/1434899831?i=1434899925&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/killer-queen-2011-remaster/1434899831?i=1434899925&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e3/06/0d/e3060d43-122a-06f1-0727-046d2fd3d00c/mzaf_10838572092136278634.plus.aac.p.m4a",
      "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/54/0b/ef540ba4-bbe7-0809-aa55-97ce32e0e13d/18UMGIM55763.rgb.jpg/30x30bb.jpg",
      "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/54/0b/ef540ba4-bbe7-0809-aa55-97ce32e0e13d/18UMGIM55763.rgb.jpg/60x60bb.jpg",
      "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/54/0b/ef540ba4-bbe7-0809-aa55-97ce32e0e13d/18UMGIM55763.rgb.jpg/100x100bb.jpg",
      "collectionPrice": 11.99,
      "trackPrice": 1.29,
      "releaseDate": "1974-10-11T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 21,
      "trackNumber": 5,
      "trackTimeMillis": 179356,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Rock",
      "isStreamable": true
    },
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 3296287,
      "collectionId": 1434899831,
      "trackId": 1434899929,
      "artistName": "Queen",
      "collectionName": "Bohemian Rhapsody (The Original Soundtrack)",
      "trackName": "Bohemian Rhapsody",
      "collectionCensoredName": "Bohemian Rhapsody (The Original Soundtrack)",
      "trackCensoredName": "Bohemian Rhapsody (2011 Remaster)",
      "artistViewUrl": "https://music.apple.com/us/artist/queen/3296287?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/bohemian-rhapsody-2011-remaster/1434899831?i=1434899929&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/bohemian-rhapsody-2011-remaster/1434899831?i=1434899929&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f6/46/00/f6460056-3685-6c72-f440-dde90e2f52a8/mzaf_7470643542683708752.plus.aac.p.m4a",
      "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/54/0b/ef540ba4-bbe7-0809-aa55-97ce32e0e13d/18UMGIM55763.rgb.jpg/30x30bb.jpg",
      "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/54/0b/ef540ba4-bbe7-0809-aa55-97ce32e0e13d/18UMGIM55763.rgb.jpg/60x60bb.jpg",
      "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/54/0b/ef540ba4-bbe7-0809-aa55-97ce32e0e13d/18UMGIM55763.rgb.jpg/100x100bb.jpg",
      "collectionPrice": 11.99,
      "trackPrice": 1.29,
      "releaseDate": "1975-10-31T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 21,
      "trackNumber": 7,
      "trackTimeMillis": 354947,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Rock",
      "isStreamable": true
    }
  ]
}
```

### Lookup Song by ID

```ts
// npm
import { lookupItunes } from "node-itunes-search";
// jsr
import { lookupItunes } from "@nullbitme/search-itunes";

const results = await lookupItunes({
  id: "1440660665", // This can optionally be an array of known string ids
});

console.log(results);
```

```json
{
  "resultCount": 1,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 857919,
      "collectionId": 1440660649,
      "trackId": 1440660665,
      "artistName": "Queens of the Stone Age",
      "collectionName": "Era Vulgaris",
      "trackName": "River In the Road",
      "collectionCensoredName": "Era Vulgaris",
      "trackCensoredName": "River In the Road",
      "artistViewUrl": "https://music.apple.com/us/artist/queens-of-the-stone-age/857919?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/river-in-the-road/1440660649?i=1440660665&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/river-in-the-road/1440660649?i=1440660665&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fe/d4/ce/fed4ce08-e3b7-70a5-f532-829aa76ed8be/mzaf_620311569877156662.plus.aac.p.m4a",
      "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/d4/60/efd46037-fa6d-7fe3-5ff6-03a48e011744/00602517401488.rgb.jpg/30x30bb.jpg",
      "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/d4/60/efd46037-fa6d-7fe3-5ff6-03a48e011744/00602517401488.rgb.jpg/60x60bb.jpg",
      "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/d4/60/efd46037-fa6d-7fe3-5ff6-03a48e011744/00602517401488.rgb.jpg/100x100bb.jpg",
      "collectionPrice": 10.99,
      "trackPrice": 1.29,
      "releaseDate": "2007-01-01T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 12,
      "trackNumber": 10,
      "trackTimeMillis": 199080,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Rock",
      "isStreamable": true
    }
  ]
}
```

## Contributing

Feel free to make an issue or pull request and i'll try to review it as soon as I can.

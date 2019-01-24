# node-itunes-search [![npm](https://img.shields.io/npm/v/node-itunes-search.svg)](https://www.npmjs.com/package/node-itunes-search) [![Build Status](https://travis-ci.org/jacob-shuman/node-itunes-search.svg?branch=master)](https://travis-ci.org/jacob-shuman/node-itunes-search)

> A simple NodeJS wrapper for the ITunes Search API.

## What?

The [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) is a publicly available API hosted by Apple which streams [Metadata](https://en.wikipedia.org/wiki/Metadata). This wrapper uses the [phin](https://www.npmjs.com/package/phin) npm package to make HTTP requests to the API.

- [**Installation**](#installation)
- [**Importing**](#importing)
- [**Usage**](#usage)
- [**API**](#api)
- [**Contributing**](#contributing)
- [**Examples**](#examples)

<a name="installation"></a>

## Installation

```bash
$ npm install node-itunes-search
```

<a name="importing"></a>

## Importing

#### Commonjs

```ts
const itunesAPI = require("node-itunes-search");
```

#### ES6

```ts
import {ItunesSearchOptions} from "node-itunes-search";
```

#### Default Namespace

```ts
import ItunesSearch from "node-itunes-search";
```

<a name="usage"></a>

## Usage

The module exposes 2 functions `searchItunes` and `lookupItunes` which can be used to search and lookup content using the Itunes Search API respectively.

Both of these functions use vanilla javascript promises which, when successful, will return an `ItunesResult`.

**Note** Versions 1.2.0 and higher now have a simpler syntax.

### Search

```ts
const itunesAPI = require("node-itunes-search");

const searchOptions = new itunesAPI.ItunesSearchOptions({
  term: "Queen Bohemian Rhapsody", // All searches require a single string query.

  limit: 1 // An optional maximum number of returned results may be specified.
});

itunesAPI.searchItunes(searchOptions).then((result) => {
  console.log(result);
});
```

### Simple Search

```ts
const itunesApi = require("node-itunes-search");

const searchOptions = {
  term: "Queen Bohemian Rhapsody",
  limit: 1
};

const result = await itunesApi.searchItunes(searchOptions);
```

### Lookup

```ts
import {
  lookupItunes,
  ItunesResult,
  ItunesLookupOptions,
  ItunesLookupType
} from "node-itunes-search";

const lookupOptions = new ItunesLookupOptions({
  keys: ["560857776"], // Specify ID(s) of desired content
  keyType: ItunesLookupType.ID // Searching by content ID(s)
});

lookupItunes(lookupOptions).then((result: ItunesResult) => {
  console.log(result);
});
```

### Simple Lookup

```ts
import ItunesSearch from "node-itunes-search";

const lookupOptions: ItunesSearch.LookupOptionsInterface = {
  keys: ["560857776"],
  keyType: ItunesSearch.LookupType.ID
};

const result: ItunesSearch.Result = await ItunesSearch.lookup(lookupOptions);
```

<a name="api"></a>

## API

### Global Variables

#### **`const itunesSearchRoot: string`**

The root domain used when making search queries using the `searchItunes` function.

#### **`const itunesLookupRoot: string`**

The root domain used when making lookup queries using the `lookupItunes` function.

### Interfaces

#### `ISearchOptions`

The structure for an options object required when calling the `searchItunes` function.

#### Members

#### **`term: string`**

The string query for the search request. For example if your looking for a particular song, using the format "ARTIST_NAME SONG_NAME" may return more accurate results.

#### **`country?: string`**

A 2 character string representing an ISO 3166 code.

For example, to specify "United States" use "US".

Please refer to the following URL for other country codes:
https://en.m.wikipedia.org/wiki/ISO_3166-1_alpha-2

#### **`media?: ItunesMedia`**

#### **`entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll`**

#### **`limit?: number`**

#### **`lang?: "en_us" | "ja_jp"`**

#### **`extras?: {}`**

A JSON object containing any custom query properties to be included in the search.

This is useful when a property is missing from `ISearchOptions`.

#### **`toURI?: () => string`**

#### `ILookupOptions`

The structure for an options object required when calling the `lookupItunes` function.

#### **`keys: Array<string>`**

#### **`keyType: ItunesLookupType`**

#### **`entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll`**

#### **`limit?: number`**

#### **`extras?: {}`**

A JSON object containing any custom query properties to be included in the search.

This is useful when a property is missing from `ILookupOptions`.

#### **`toURI?: () => string`**

### Classes

#### `ItunesSearchOptions`

#### `ItunesLookupOptions`

#### `ItunesProperties`

All the properties of a single result from a `searchItunes` or `lookupItunes` query.

Each `ItunesProperties` also comes with a `raw` property. This is an exact copy of the result without enforcing any types. The `raw` property is especially useful when a needed result property is missing from the `ItunesProperties` class.

| Type                 | Member                   |
| -------------------- | ------------------------ |
| `ItunesWrapperType`  | `wrapperType`            |
| <br>                 |                          |
| `ItunesKind`         | `kind`                   |
| <br>                 |                          |
| `ItunesExplicitness` | `collectionExplicitness` |
| `ItunesExplicitness` | `trackExplicitness`      |
| <br>                 |                          |
| `boolean`            | `isStreamable`           |
| <br>                 |                          |
| `object`             | `raw`                    |
| <br>                 |                          |
| `number`             | `artistId`               |
| `number`             | `collectionId`           |
| `number`             | `trackId`                |
| `number`             | `collectionPrice`        |
| `number`             | `trackPrice`             |
| `number`             | `discCount`              |
| `number`             | `discNumber`             |
| `number`             | `trackCount`             |
| `number`             | `trackNumber`            |
| `number`             | `trackTimeMillis`        |
| <br>                 |                          |
| `string`             | `artistName`             |
| `string`             | `collectionName`         |
| `string`             | `trackName`              |
| `string`             | `collectionCensoredName` |
| `string`             | `trackCensoredName`      |
| `string`             | `artistViewUrl`          |
| `string`             | `collectionViewUrl`      |
| `string`             | `trackViewUrl`           |
| `string`             | `previewUrl`             |
| `string`             | `artworkUrl30`           |
| `string`             | `artworkUrl60`           |
| `string`             | `artworkUrl100`          |
| `string`             | `releaseDate`            |
| `string`             | `country`                |
| `string`             | `currency`               |
| `string`             | `primaryGenreName`       |

#### `ItunesResult`

The returned metadata of a `searchItunes` or `lookupItunes` query.

#### Members

#### **`const results: Array<ItunesProperties>`**

An `Array` of `ItunesProperties` objects parsed from the result of a `searchItunes` or `lookupItunes` query.

#### **`const resultCount: number`**

The total number of `results`.

### Enums

#### `ItunesLookupType`

| Key           | Value           |
| ------------- | --------------- |
| `ID`          | `"id"`          |
| `AMGARTISTID` | `"amgArtistId"` |
| `AMGALBUMID`  | `"amgAlbumId"`  |
| `AMGVIDEOID`  | `"amgVideoId"`  |
| `UPC`         | `"upc"`         |
| `ISBN`        | `"isbn"`        |

#### `ItunesExplicitness`

| Key           | Value           |
| ------------- | --------------- |
| `Explicit`    | `"explicit"`    |
| `Cleaned`     | `"cleaned"`     |
| `NotExplicit` | `"notExplicit"` |

#### `ItunesKind`

| Key                  | Value                   |
| -------------------- | ----------------------- |
| `Book`               | `"book"`                |
| `Album`              | `"album"`               |
| `CoachedAudio`       | `"coached-audio"`       |
| `FeatureMovie`       | `"feature-movie"`       |
| `InteractiveBooklet` | `"interactive-booklet"` |
| `MusicVideo`         | `"music-video"`         |
| `PdfPodcast`         | `"pdf podcast"`         |
| `PodcastEpisode`     | `"podcast-episode"`     |
| `SoftwarePackage`    | `"software-package"`    |
| `Song`               | `"song"`                |
| `TvEpisode`          | `"tv-episode"`          |
| `Artist`             | `"artist"`              |

#### `ItunesWrapperType`

| Key          | Value          |
| ------------ | -------------- |
| `Track`      | `"track"`      |
| `Collection` | `"collection"` |
| `Artist`     | `"artist"`     |

#### `ItunesMedia`

| Key          | Value          |
| ------------ | -------------- |
| `Movie`      | `"movie"`      |
| `Podcast`    | `"podcast"`    |
| `Music`      | `"music"`      |
| `MusicVideo` | `"musicVideo"` |
| `AudioBook`  | `"audiobook"`  |
| `ShortFilm`  | `"shortFilm"`  |
| `TvShow`     | `"tvShow"`     |
| `Software`   | `"software"`   |
| `Ebook`      | `"ebook"`      |
| `All`        | `"all"`        |

#### `ItunesEntityMovie`

| Key           | Value           |
| ------------- | --------------- |
| `MovieArtist` | `"movieArtist"` |
| `Movie`       | `"movie"`       |

#### `ItunesEntityPodcast`

| Key             | Value             |
| --------------- | ----------------- |
| `PodcastAuthor` | `"podcastAuthor"` |
| `Podcast`       | `"podcast"`       |

#### `ItunesEntityMusic`

| Key           | Value           |
| ------------- | --------------- |
| `MusicArtist` | `"musicArtist"` |
| `MusicTrack`  | `"musicTrack"`  |
| `Album`       | `"album"`       |
| `MusicVideo`  | `"musicVideo"`  |
| `Mix`         | `"mix"`         |
| `Song`        | `"song"`        |

#### `ItunesEntityMusicVideo`

| Key           | Value           |
| ------------- | --------------- |
| `MusicArtist` | `"musicArtist"` |
| `MusicVideo`  | `"musicVideo"`  |

#### `ItunesEntityAudioBook`

| Key               | Value               |
| ----------------- | ------------------- |
| `AudioBookAuthor` | `"audiobookAuthor"` |
| `AudioBook`       | `"audiobook"`       |

#### `ItunesEntityShortFilm`

| Key               | Value               |
| ----------------- | ------------------- |
| `ShortFilmArtist` | `"shortFilmArtist"` |
| `ShortFilm`       | `"shortFilm"`       |

#### `ItunesEntityTvShow`

| Key         | Value         |
| ----------- | ------------- |
| `TvEpisode` | `"tvEpisode"` |
| `TvSeason`  | `"tvSeason"`  |

#### `ItunesEntitySoftware`

| Key            | Value            |
| -------------- | ---------------- |
| `Software`     | `"software"`     |
| `IPadSoftware` | `"iPadSoftware"` |
| `MacSoftware`  | `"macSoftware"`  |

#### `ItunesEntityEbook`

| Key     | Value     |
| ------- | --------- |
| `Ebook` | `"ebook"` |
  

#### `ItunesEntityAll`

| Key          | Value          |
| ------------ | -------------- |
| `Movie`      | `"movie"`      |
| `Album`      | `"album"`      |
| `AllArtist`  | `"allArtist"`  |
| `Podcast`    | `"podcast"`    |
| `MusicVideo` | `"musicVideo"` |
| `Mix`        | `"mix"`        |
| `AudioBook`  | `"audiobook"`  |
| `TvSeason`   | `"tvSeason"`   |
| `AllTrack`   | `"allTrack"`   |

### Functions

#### `searchItunes`

#### `lookupItunes`

### Namespace

`node-itunes-search` exports a single default namespace `ItunesSearch`. This is an alternative to referencing all models the package exports.

#### Aliases

| Type            | Model                    | Namespace Alias          |
| --------------- | ------------------------ | ------------------------ |
| Global Variable | `itunesSearchRoot`       | `SearchRoot`             |
| Global Variable | `itunesLookupRoot`       | `LookupRoot`             |
| <br>            |                          |                          |
| Interface       | `ISearchOptions`         | `SearchOptionsInterface` |
| Interface       | `ILookupOptions`         | `LookupOptionsInterface` |
| <br>            |                          |                          |
| Class           | `ItunesSearchOptions`    | `SearchOptions`          |
| Class           | `ItunesLookupOptions`    | `LookupOptions`          |
| Class           | `ItunesProperties`       | `Properties`             |
| Class           | `ItunesResult`           | `Result`                 |
| <br>            |                          |                          |
| Enum            | `ItunesLookupType`       | `LookupType`             |
| Enum            | `ItunesExplicitness`     | `Explicitness`           |
| Enum            | `ItunesKind`             | `Kind`                   |
| Enum            | `ItunesWrapperType`      | `WrapperType`            |
| Enum            | `ItunesMedia`            | `Media`                  |
| Enum            | `ItunesEntityMovie`      | `Entity.Movie`           |
| Enum            | `ItunesEntityPodcast`    | `Entity.Podcast`         |
| Enum            | `ItunesEntityMusic`      | `Entity.Music`           |
| Enum            | `ItunesEntityMusicVideo` | `Entity.MusicVideo`      |
| Enum            | `ItunesEntityAudioBook`  | `Entity.AudioBook`       |
| Enum            | `ItunesEntityShortFilm`  | `Entity.ShortFilm`       |
| Enum            | `ItunesEntityTvShow`     | `Entity.TvShow`          |
| Enum            | `ItunesEntitySoftware`   | `Entity.Software`        |
| Enum            | `ItunesEntityEbook`      | `Entity.Ebook`           |
| Enum            | `ItunesEntityAll`        | `Entity.All`             |
| <br>            |                          |                          |
| Function        | `searchItunes`           | `search`                 |
| Function        | `lookupItunes`           | `lookup`                 |

**Note**: Since the `ItunesSearch` namespace is the `default` export of the package, using the name `ItunesSearch` is **optional**.

#### Example

| Description                                 | Statement                                              | Result      |
| ------------------------------------------- | ------------------------------------------------------ | ----------- |
| TypeScript import                           | `import ItunesSearch from "node-itunes-search";`       | **Success** |
| Default import                              | `import ItunesSearch from "node-itunes-search";`       | **Success** |
| Default import (custom identifier)          | `import NodeItunesSearch from "node-itunes-search";`   | **Success** |
| <br>                                        |                                                        |             |
| TypeScript import (non-existent identifier) | `import {NodeItunesSearch} from "node-itunes-search";` | **Fail**    |

<a name="contributing"></a>

## Contributing

Feel free to make an issue or pull request. My schedule is pretty open and I will be more than happy to review any requests or answer any questions you may have!

<a name="examples"></a>

## Examples

Look in the [examples directory](https://github.com/jacob-shuman/node-itunes-search/tree/master/examples) for usage examples.

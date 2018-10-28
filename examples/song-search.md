# Song Search

```ts
const itunesAPI = require("node-itunes-search");

const searchOptions = new itunesAPI.ItunesSearchOptions({
  // Search Query
  term: "Queen Bohemian Rhapsody",

  // Setting max number of results to 1
  limit: 1
});

itunesAPI.searchItunes(searchOptions).then((searchResult: ItunesResult) => {
  console.log(searchResult);
});
```

## Result

```json
ItunesResult {
  "resultCount": 1,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": "3296287",
      "collectionId": 932648190,
      "trackId": "932648449",
      "artistName": "Queen",
      "collectionName": "The Platinum Collection (Greatest Hits I, II & III)",
      "trackName": "Bohemian Rhapsody",
      "collectionCensoredName": "The Platinum Collection (Greatest Hits I, II & III)",
      "trackCensoredName": "Bohemian Rhapsody",
      "artistViewUrl": "https://itunes.apple.com/us/artist/queen/3296287?uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/album/bohemian-rhapsody/932648190?i=932648449&uo=4",
      "trackViewUrl": "https://itunes.apple.com/us/album/bohemian-rhapsody/932648190?i=932648449&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/41/cc/ae/41ccae59-697a-414c-43b5-51bd4d88d535/mzaf_3150742134610995145.plus.aac.p.m4a",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music1/v4/94/92/a3/9492a374-e6e3-8e92-0630-a5761070b0f7/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music1/v4/94/92/a3/9492a374-e6e3-8e92-0630-a5761070b0f7/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music1/v4/94/92/a3/9492a374-e6e3-8e92-0630-a5761070b0f7/source/100x100bb.jpg",
      "collectionPrice": 19.99,
      "trackPrice": 1.29,
      "releaseDate": "1975-10-31T08:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 3,
      "discNumber": 1,
      "trackCount": 17,
      "trackNumber": 1,
      "trackTimeMillis": 355145,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Rock",
      "isStreamable": true
    }
  ]
}
```

# Lookup Song by ID

```ts
import { lookupItunes, ItunesLookupOptions } from "node-itunes-search";

const lookupOptions = new ItunesLookupOptions({
  keys: ["560857776"],
  keyType: ItunesLookupType.ID
});

lookupItunes(lookupOptions).then((result: ItunesResult) => {
  console.log(result);
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
      "artistId": "326454625",
      "collectionId": 560857774,
      "trackId": "560857776",
      "artistName": "Bohemian Rhapsody",
      "collectionName": "Who Wants to Rock Forever",
      "trackName": "Killer Queen",
      "collectionCensoredName": "Who Wants to Rock Forever",
      "trackCensoredName": "Killer Queen",
      "artistViewUrl": "https://itunes.apple.com/us/artist/bohemian-rhapsody/326454625?uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/album/killer-queen/560857774?i=560857776&uo=4",
      "trackViewUrl": "https://itunes.apple.com/us/album/killer-queen/560857774?i=560857776&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/5e/0d/76/mzi.djsmswgb.aac.p.m4a",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/ca/24/f0/ca24f024-97fe-8832-5999-a3a4b33de467/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/ca/24/f0/ca24f024-97fe-8832-5999-a3a4b33de467/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/ca/24/f0/ca24f024-97fe-8832-5999-a3a4b33de467/source/100x100bb.jpg",
      "collectionPrice": 6.99,
      "trackPrice": 0.69,
      "releaseDate": "2012-09-15T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 15,
      "trackNumber": 2,
      "trackTimeMillis": 186227,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "American Trad Rock",
      "isStreamable": true
    }
  ]
}
```

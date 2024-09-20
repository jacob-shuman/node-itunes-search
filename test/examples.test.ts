import { describe, expect, test } from "vitest";
import { lookupItunes, searchItunes } from "../src/mod";

describe("Search Examples", () => {
  test("Song Search", async () => {
    const { resultCount, results } = await searchItunes({
      term: "Queen Bohemian Rhapsody",
      limit: 2,
    });

    expect(resultCount).toEqual(2);

    for (let { artistName } of results) {
      expect(artistName).toEqual("Queen");
    }
  });
});

describe("Lookup Examples", () => {
  test("Lookup Song by ID", async () => {
    expect(
      await lookupItunes({
        id: ["1440660665"],
      })
    ).toEqual({
      resultCount: 1,
      results: [
        {
          wrapperType: "track",
          kind: "song",
          artistId: 857919,
          collectionId: 1440660649,
          trackId: 1440660665,
          artistName: "Queens of the Stone Age",
          collectionName: "Era Vulgaris",
          trackName: "River In the Road",
          collectionCensoredName: "Era Vulgaris",
          trackCensoredName: "River In the Road",
          artistViewUrl:
            "https://music.apple.com/us/artist/queens-of-the-stone-age/857919?uo=4",
          collectionViewUrl:
            "https://music.apple.com/us/album/river-in-the-road/1440660649?i=1440660665&uo=4",
          trackViewUrl:
            "https://music.apple.com/us/album/river-in-the-road/1440660649?i=1440660665&uo=4",
          previewUrl:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fe/d4/ce/fed4ce08-e3b7-70a5-f532-829aa76ed8be/mzaf_620311569877156662.plus.aac.p.m4a",
          artworkUrl30:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/d4/60/efd46037-fa6d-7fe3-5ff6-03a48e011744/00602517401488.rgb.jpg/30x30bb.jpg",
          artworkUrl60:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/d4/60/efd46037-fa6d-7fe3-5ff6-03a48e011744/00602517401488.rgb.jpg/60x60bb.jpg",
          artworkUrl100:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/d4/60/efd46037-fa6d-7fe3-5ff6-03a48e011744/00602517401488.rgb.jpg/100x100bb.jpg",
          collectionPrice: 10.99,
          trackPrice: 1.29,
          releaseDate: "2007-01-01T12:00:00Z",
          collectionExplicitness: "notExplicit",
          trackExplicitness: "notExplicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 10,
          trackTimeMillis: 199080,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Rock",
          isStreamable: true,
        },
      ],
    });
  });
});

import { describe, expect, test } from "vitest";
import { lookupItunes } from "../src/mod";

describe("Lookup", () => {
  /**
   * @see {@link https://itunes.apple.com/lookup?id=909253}
   */
  test(`Look up Jack Johnson by iTunes artist ID`, async () => {
    const { resultCount } = await lookupItunes({
      id: ["909253"],
    });

    expect(resultCount).toEqual(1);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?id=284910350}
   */
  test(`Look up Yelp Software application by iTunes ID`, async () => {
    const { resultCount } = await lookupItunes({
      id: ["284910350"],
    });

    expect(resultCount).toEqual(1);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?amgArtistId=468749}
   */
  test(`Look up Jack Johnson by AMG artist ID`, async () => {
    const results = await lookupItunes({
      amgArtistId: ["468749"],
    });

    expect(results).toEqual({
      resultCount: 1,
      results: [
        {
          wrapperType: "artist",
          artistType: "Artist",
          artistName: "Jack Johnson",
          artistLinkUrl:
            "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
          artistId: 909253,
          amgArtistId: 468749,
          primaryGenreName: "Rock",
          primaryGenreId: 21,
        },
      ],
    });
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?amgArtistId=468749,5723}
   */
  test(`Look up multiple artists by their AMG artist IDs`, async () => {
    const results = await lookupItunes({
      amgArtistId: ["468749", "5723"],
    });

    expect(results).toEqual({
      resultCount: 2,
      results: [
        {
          wrapperType: "artist",
          artistType: "Artist",
          artistName: "Jack Johnson",
          artistLinkUrl:
            "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
          artistId: 909253,
          amgArtistId: 468749,
          primaryGenreName: "Rock",
          primaryGenreId: 21,
        },
        {
          wrapperType: "artist",
          artistType: "Artist",
          artistName: "U2",
          artistLinkUrl: "https://music.apple.com/us/artist/u2/78500?uo=4",
          artistId: 78500,
          amgArtistId: 5723,
          primaryGenreName: "Rock",
          primaryGenreId: 21,
        },
      ],
    });
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?id=909253&entity=album}
   */
  test(`Look up all albums for Jack Johnson`, async () => {
    const { resultCount } = await lookupItunes({
      id: "909253",
      entity: "album",
      sort: "recent",
    });

    expect(resultCount).toEqual(49);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=album&limit=5}
   */
  test(`Look up multiple artists by their AMG artist IDs and get each artist's top 5 albums`, async () => {
    const { resultCount } = await lookupItunes({
      amgArtistId: ["468749", "5723"],
      entity: "album",
      limit: "5",
    });

    expect(resultCount).toEqual(12);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=song&limit=5&sort=recent}
   */
  test(`Look up multiple artists by their AMG artist IDs and get each artist's 5 most recent songs`, async () => {
    const { resultCount } = await lookupItunes({
      amgArtistId: ["468749", "5723"],
      entity: "song",
      limit: "5",
      sort: "recent",
    });

    expect(resultCount).toEqual(12);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?upc=720642462928}
   */
  test(`Look up an album or video by its UPC`, async () => {
    const { resultCount } = await lookupItunes({
      upc: "720642462928",
    });

    expect(resultCount).toEqual(2);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?upc=720642462928&entity=song}
   */
  test(`Look up an album by its UPC, including the tracks on that album`, async () => {
    const { resultCount } = await lookupItunes({
      upc: "720642462928",
      entity: "song",
    });

    expect(resultCount).toEqual(36);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?amgAlbumId=15175,15176,15177,15178,15183,15184,15187,1519,15191,15195,15197,15198}
   */
  test(`Look up an album by its AMG Album ID`, async () => {
    const { resultCount } = await lookupItunes({
      amgAlbumId: [
        "15175",
        "15176",
        "15177",
        "15178",
        "15183",
        "15184",
        "15187",
        "1519",
        "15191",
        "15195",
        "15197",
        "15198",
      ],
    });

    expect(resultCount).toEqual(2);
  });

  /**
   * @see {@link https://itunes.apple.com/lookup?isbn=9780316069359}
   */
  test(`Look up a book by its 13 digit ISBN`, async () => {
    const { resultCount } = await lookupItunes({
      isbn: "9780316069359",
    });

    expect(resultCount).toEqual(1);
  });
});

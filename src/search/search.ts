import { ItunesMedia } from "../media";
import { ItunesResult } from "../result";
import { ItunesSearchOptions } from "./search-options";

export function searchItunes(
  options: ItunesSearchOptions
): Promise<ItunesResult> {
  const itunesSearchRoot = "https://itunes.apple.com/search";

  return new Promise((resolve, reject) => {
    const phin = require("phin");

    phin(`${itunesSearchRoot}?${options.toURI()}`, (err: any, res: any) => {
      // TODO Use ItunesResult instead for type preservation.
      if (err) {
        reject(err);
      } else {
        res.body = JSON.parse(res.body);
        resolve(ItunesResult.parse(res.body));
      }
    });
  });
}

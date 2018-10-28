import { ItunesResult } from "../result";
import { ItunesLookupOptions } from "./lookup-options";

export const itunesLookupRoot = "https://itunes.apple.com/lookup";

export function lookupItunes(
  options: ItunesLookupOptions
): Promise<ItunesResult> {
  return new Promise((resolve, reject) => {
    const phin = require("phin");

    phin(`${itunesLookupRoot}?${options.toURI()}`, (err: any, res: any) => {
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

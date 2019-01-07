import {ItunesResult} from "../result/result";
import {ISearchOptions, ItunesSearchOptions} from "./search-options";

export const itunesSearchRoot: string = "https://itunes.apple.com/search";

export function searchItunes(options: ISearchOptions | ItunesSearchOptions): Promise<ItunesResult> {
  return new Promise((resolve, reject) => {
    const phin = require("phin");

    //Initializing passed options (adding methods when directly passing an object)
    const searchOptions: ItunesSearchOptions = ItunesSearchOptions.from(options);

    phin(`${itunesSearchRoot}?${searchOptions.toURI()}`, (err: any, res: any) => {
      if (err) {
        reject(err);
      } else {
        res.body = JSON.parse(res.body);
        resolve(ItunesResult.from(res.body));
      }
    });
  });
}

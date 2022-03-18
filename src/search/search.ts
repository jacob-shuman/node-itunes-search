import {ItunesResult} from "../result/result";
import {ISearchOptions, ItunesSearchOptions} from "./search-options";

export const itunesSearchRoot: string = "https://itunes.apple.com/search";

export function searchItunes(options: ISearchOptions | ItunesSearchOptions): Promise<ItunesResult> {
  return new Promise((resolve, reject) => {
    const phin = require("phin");

    //Initializing passed options (adding methods when directly passing an object)
    const searchOptions: ItunesSearchOptions = ItunesSearchOptions.from(options);

    phin({
      url: `${itunesSearchRoot}?${searchOptions.toURI()}`,
      parse: 'json',
    }, (err: any, res: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(ItunesResult.from(res.body));
      }
    });
  });
}

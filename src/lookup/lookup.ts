import {ItunesResult} from "../result/result";
import {ILookupOptions, ItunesLookupOptions, ItunesLookupType} from "./lookup-options";

export const itunesLookupRoot = "https://itunes.apple.com/lookup";

export function lookupItunes(options: ILookupOptions | ItunesLookupOptions): Promise<ItunesResult> {
  return new Promise((resolve, reject) => {
    const phin = require("phin");

    //Initializing passed options (adding methods when directly passing an object)
    const lookupOptions: ItunesLookupOptions = ItunesLookupOptions.from(options);

    phin(`${itunesLookupRoot}?${lookupOptions.toURI()}`, (err: any, res: any) => {
      if (err) {
        reject(err);
      } else {
        res.body = JSON.parse(res.body);
        resolve(ItunesResult.from(res.body));
      }
    });
  });
}

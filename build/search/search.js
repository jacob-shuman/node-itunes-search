"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../result/result");
const search_options_1 = require("./search-options");
exports.itunesSearchRoot = "https://itunes.apple.com/search";
function searchItunes(options) {
    return new Promise((resolve, reject) => {
        const phin = require("phin");
        //Initializing passed options (adding methods when directly passing an object)
        const searchOptions = search_options_1.ItunesSearchOptions.from(options);
        phin({
            url: `${exports.itunesSearchRoot}?${searchOptions.toURI()}`,
            parse: 'json',
        }, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result_1.ItunesResult.from(res.body));
            }
        });
    });
}
exports.searchItunes = searchItunes;

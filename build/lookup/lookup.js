"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../result");
exports.itunesLookupRoot = "https://itunes.apple.com/lookup";
function lookupItunes(options) {
    return new Promise((resolve, reject) => {
        const phin = require("phin");
        phin(`${exports.itunesLookupRoot}?${options.toURI()}`, (err, res) => {
            // TODO Use ItunesResult instead for type preservation.
            if (err) {
                reject(err);
            }
            else {
                res.body = JSON.parse(res.body);
                resolve(result_1.ItunesResult.parse(res.body));
            }
        });
    });
}
exports.lookupItunes = lookupItunes;

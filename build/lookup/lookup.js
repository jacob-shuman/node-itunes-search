"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../result/result");
exports.itunesLookupRoot = "https://itunes.apple.com/lookup";
function lookupItunes(options) {
    return new Promise((resolve, reject) => {
        const phin = require("phin");
        phin(`${exports.itunesLookupRoot}?${options.toURI()}`, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                res.body = JSON.parse(res.body);
                resolve(result_1.ItunesResult.from(res.body));
            }
        });
    });
}
exports.lookupItunes = lookupItunes;

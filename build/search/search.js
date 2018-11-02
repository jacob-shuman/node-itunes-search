"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../result");
exports.itunesSearchRoot = "https://itunes.apple.com/search";
function searchItunes(options) {
    return new Promise((resolve, reject) => {
        const phin = require("phin");
        phin(`${exports.itunesSearchRoot}?${options.toURI()}`, (err, res) => {
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
exports.searchItunes = searchItunes;

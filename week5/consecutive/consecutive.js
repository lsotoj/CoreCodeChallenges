"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestConsec = void 0;
function longestConsec(strarr, k) {
    if (k === 1)
        strarr.sort((a, b) => b.length - a.length)[0];
    let newArr = [];
    for (let i = 0; i < strarr.length - 1; i++) {
        newArr.push(strarr.slice(i, i + k).join(""));
    }
    newArr = newArr.sort((a, b) => b.length - a.length);
    console.log(newArr);
    return newArr[0];
}
exports.longestConsec = longestConsec;
//console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)) //folingtrashy
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); //"oocccffuucccjjjkkkjyyyeehh"

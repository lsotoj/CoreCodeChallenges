"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accum = void 0;
function accum(s) {
    let arr = s.split("");
    return arr.reduce((acc, current, index) => {
        return acc + "-" + current.toUpperCase() + current.toLowerCase().repeat(index);
    }, "").slice(1);
    console.log(arr);
    return "";
}
exports.accum = accum;
console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));

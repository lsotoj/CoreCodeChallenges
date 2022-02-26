"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = void 0;
function duplicateEncode(word) {
    // ...
    let arr = word.toLocaleLowerCase().split("");
    let dic = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in dic)
            dic[arr[i]]++;
        else
            dic[arr[i]] = 1;
    }
    return arr.map((word) => dic[word] > 1 ? ")" : "(").join("");
}
exports.duplicateEncode = duplicateEncode;
console.log(duplicateEncode("Success")); //  ")())())"

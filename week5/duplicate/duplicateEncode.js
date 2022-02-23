"use strict";
exports.__esModule = true;
exports.duplicateEncode = void 0;
function duplicateEncode(word) {
    // ...
    var arr = word.toLocaleLowerCase().split("");
    var dic = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in dic)
            dic[arr[i]]++;
        else
            dic[arr[i]] = 1;
    }
    return arr.map(function (word) { return dic[word] > 1 ? ")" : "("; }).join("");
}
exports.duplicateEncode = duplicateEncode;
console.log(duplicateEncode("Success")); //  ")())())"

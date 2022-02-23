"use strict";
exports.__esModule = true;
exports.validBraces = void 0;
function validBraces(braces) {
    var arr = braces.split("");
    var count = 0;
    var flag = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ")") {
            count--;
            if (arr[i - 1] === "(")
                flag = true;
        }
        else if (arr[i] === "]") {
            count--;
            if (arr[i - 1] === "[")
                flag = true;
        }
        else if (arr[i] === "}") {
            count--;
            if (arr[i - 1] === "{")
                flag = true;
        }
        else {
            count++;
        }
        if (count < 0)
            return false;
    }
    return flag;
}
exports.validBraces = validBraces;
console.log(validBraces("(){}[]")); //true
console.log(validBraces("[({})](]")); //false
console.log(validBraces("[[(])]")); //false
console.log(validBraces("([{}])")); // true

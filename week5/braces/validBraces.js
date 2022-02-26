"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBraces = void 0;
function validBraces(braces) {
    const arr = braces.split("");
    let count = 0;
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
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

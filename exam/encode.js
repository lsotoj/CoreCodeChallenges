"use strict";
function encode(plainText) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let arr = plainText.split("");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let count = 1;
        while (element === arr[i + 1]) {
            count++;
            i++;
        }
        result = result + count.toString() + element;
    }
    console.log(result);
    return result;
}
console.log(encode("aaaabccaaa"));

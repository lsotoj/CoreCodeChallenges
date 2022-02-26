"use strict";
const digPow = (n, p) => {
    // your code
    let arr = n.toString().split("");
    let top;
    top = arr.reduce((sum, current, index) => {
        return sum + Math.pow(parseInt(current), p++);
    }, 0);
    if (top === n)
        return 1;
    if (!Number.isInteger(top / n))
        return -1;
    return top / n;
};
//digPow(46288, 3)
console.log(digPow(92, 1));
console.log(digPow(46288, 5));

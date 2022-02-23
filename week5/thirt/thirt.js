"use strict";
exports.__esModule = true;
exports.thirt = void 0;
function thirt(n) {
    // your code
    var last = n;
    var num = n.toString().split("");
    var sequence = [];
    var flag = 0;
    for (var i = 0; i < num.length; i++) {
        sequence.push(Math.pow(10, i) % 13);
    }
    while (last !== flag) {
        flag = last;
        last = num.reverse().reduce(function (sum, current, index) {
            return (parseInt(current) * sequence[index]) + sum;
        }, 0);
        num = last.toString().split("");
    }
    console.log(last);
    return 0;
}
exports.thirt = thirt;
thirt(1234567);

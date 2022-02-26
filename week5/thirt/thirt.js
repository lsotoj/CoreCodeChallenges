"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thirt = void 0;
function thirt(n) {
    // your code
    let last = n;
    let num = n.toString().split("");
    let sequence = [];
    let flag = 0;
    for (let i = 0; i < num.length; i++) {
        sequence.push(Math.pow(10, i) % 13);
    }
    while (last !== flag) {
        flag = last;
        last = num.reverse().reduce((sum, current, index) => {
            return (parseInt(current) * sequence[index]) + sum;
        }, 0);
        num = last.toString().split("");
    }
    console.log(last);
    return 0;
}
exports.thirt = thirt;
thirt(1234567);

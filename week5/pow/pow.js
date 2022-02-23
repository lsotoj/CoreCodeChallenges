var digPow = function (n, p) {
    // your code
    var arr = n.toString().split("");
    var top;
    top = arr.reduce(function (sum, current, index) {
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

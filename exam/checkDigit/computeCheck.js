function check(identificationNumber) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    var arr = identificationNumber.split("");
    var sum = 3 * arr.reduce(function (sum, current, index) {
        if (index % 2 === 0)
            return sum + parseInt(current);
        return sum;
    }, 0);
    var sum2 = (sum + arr.reduce(function (sum, current, index) {
        if ((index % 2) !== 0)
            return sum + parseInt(current);
        return sum;
    }, 0)).toString().slice(1);
    if (parseInt(sum2) === 0)
        return parseInt(sum2);
    else
        return 10 - parseInt(sum2);
}
console.log(check("39847"));

function translate(text) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    var arr = text.split("");
    var result = [];
    var regex = /[aeiou]/;
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1 && regex.test(arr[i]))
            result.push("av");
        if (regex.test(arr[i]) && !regex.test(arr[i + 1]))
            result.push("av");
        result.push(arr[i]);
        i++;
    }
    return result.join("");
}
console.log(translate("hello, secret meeting tonight"));
console.log(translate("coding game")); // cavodaving gavamave
//cavodaving gavame

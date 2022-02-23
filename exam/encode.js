function encode(plainText) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    var arr = plainText.split("");
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var count = 1;
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

"use strict";
function filterDuplicates(data) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (arr.indexOf(data[i]) < 0)
            arr.push(data[i]);
    }
    return arr;
}
filterDuplicates([7, 6, 4, 3, 3, 9]);

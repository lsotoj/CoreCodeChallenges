export const findOdd = (xs: number[]): number => {
    // happy coding!
    let dict: any = {};
    for(let i = 0; i < xs.length; i++) {
        if(xs[i] in dict) dict[xs[i]]++;
        else dict[xs[i]] = 1;
    }

    console.log(dict);
    for(let word in dict) {
        if(dict[word] % 2 !== 0) return parseInt(word);
    }
    return 0;
};
console.log(findOdd([0]));
//console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
export function longestConsec(strarr: string[], k: number): string {
    if(k === 1) strarr.sort((a, b) => b.length - a.length)[0];
    let newArr: string[] = [];
    for(let i = 0; i < strarr.length - 1; i++) {
        newArr.push(strarr.slice(i, i + k).join(""));
    }

    newArr = newArr.sort((a, b) => b.length - a.length)
    console.log(newArr);
    return newArr[0];
}

//console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)) //folingtrashy
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); //"oocccffuucccjjjkkkjyyyeehh"
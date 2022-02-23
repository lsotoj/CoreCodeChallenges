export function duplicateEncode(word: string){
    // ...
    let arr = word.toLocaleLowerCase().split("")
    let dic: any = {};
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] in dic) dic[arr[i]]++;
        else dic[arr[i]] = 1;
    }
    return arr.map((word) => dic[word] > 1? ")": "(").join("");
}

console.log(duplicateEncode("Success"));  //  ")())())"
function spinWords(string){
    //TODO Have fun :)
    //let arr = string.split(" ");

    return string.split(" ").map(word => {
        if(word.length >= 5) return word.split("").reverse().join("");

        return word
    }).join(" ");
}

console.log(spinWords("Hey fellow warriors")) //"Hey wollef sroirraw"
export function validBraces(braces: string): boolean {
    const arr: string[] = braces.split("");
    let count: number = 0;
    let flag: boolean = false;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ")") {
            count--;
            if(arr[i - 1] === "(") flag = true;
        } else if(arr[i] === "]") {
            count--;
            if(arr[i - 1] === "[") flag = true;
        } else if(arr[i] === "}") {
            count--;
            if(arr[i -1] === "{") flag = true;
        } else { count++; }
        if(count < 0) return false;
    }
    return flag;
}   



console.log(validBraces("(){}[]")); //true
console.log(validBraces("[({})](]")); //false
console.log(validBraces("[[(])]")); //false
console.log(validBraces("([{}])")); // true
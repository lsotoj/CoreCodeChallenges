export function accum(s: string): string {
    let arr: string[] = s.split("");
    return arr.reduce((acc: string, current: string, index: number) => {
        
        return acc + "-" + current.toUpperCase() + current.toLowerCase().repeat(index);
    }, "").slice(1);
    console.log(arr);
    return ""
}

console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
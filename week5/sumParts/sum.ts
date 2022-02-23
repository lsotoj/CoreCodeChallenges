export function partsSums(ls: number[]): number[] {
    console.log(ls)
    let sum: number = ls.reduce((sum, current) => sum + current, 0);
    let arr: number[] = [];
    arr.push(sum);
    for(let i = 1; i <= ls.length; i++) {
        sum -= ls[i - 1];
        arr.push(sum)
    }
    return arr;
}

console.log(partsSums([1, 2, 3, 4, 5, 6] )); //[21, 20, 18, 15, 11, 6, 0]
//console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));

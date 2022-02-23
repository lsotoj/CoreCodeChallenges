const digPow = (n: number, p: number) => {
    // your code
    let arr: string[] = n.toString().split("")
    let top: number;

    top = arr.reduce((sum: number, current: string, index: number) => {
        return sum + Math.pow(parseInt(current), p++)
    }, 0);
    if(top === n) return 1
    if(!Number.isInteger(top / n)) return -1
    return top / n;
}

//digPow(46288, 3)
console.log(digPow(92, 1));
console.log(digPow(46288, 5))
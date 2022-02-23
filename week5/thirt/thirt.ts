export function thirt(n: number): number {
    // your code
    let last: number = n;
    let num: string[] = n.toString().split("");
    let sequence: number[] = [];
    let flag: number = 0;
    for(let i = 0; i < num.length; i++) {
        sequence.push(Math.pow(10, i) % 13);
    }


    while(last !== flag) {
        flag = last;
        last = num.reverse().reduce((sum, current, index) => {
            return (parseInt(current) * sequence[index]) + sum;
        }, 0);
        num = last.toString().split("");

    }
    console.log(last);
    return 0;
}

thirt(1234567)

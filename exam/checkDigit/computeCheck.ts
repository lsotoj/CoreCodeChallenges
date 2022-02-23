function check(identificationNumber: string): number {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let arr = identificationNumber.split("");
    let sum = 3 * arr.reduce((sum, current, index) =>{
        if(index % 2 === 0) return sum + parseInt(current);
        return sum
    }, 0);

    let sum2 = (sum + arr.reduce((sum, current, index) => {
        if((index % 2) !== 0) return sum + parseInt(current)
        return sum;
    }, 0)).toString().slice(1);
    
    if(parseInt(sum2) === 0) return parseInt(sum2);
    else return 10 - parseInt(sum2);
 
}

console.log(check("39847"));
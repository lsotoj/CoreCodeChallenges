function findOdd(A) {
    //happy coding!
    let numbers = {}
    A.forEach(element => {
        if(element in numbers){
            numbers[element]++;
        } else {    
            numbers[element] = 1;
        }
    });

    function isOdd(num){
        return parseInt(num) % 2 == 0? false: true;
    }
    for(let i in numbers){
       if(isOdd(numbers[i])) return parseInt(i)
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])) //5
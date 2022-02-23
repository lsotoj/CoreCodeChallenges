function persistence(num) {
    //code m
   let arr = num.toString().split("")
   let count = 0;
   while(arr.length > 1) {
        arr = (arr.reduce((sum, curr) =>{
        return sum * parseInt(curr)
       }, 1)).toString().split("");
       count++;
   }
   console.log(arr);
   console.log(count)
 }

 persistence(999)
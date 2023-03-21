/* 

    Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
    Examples
flip(1) ➞ 0

flip(0) ➞ 1
Notes
Try completing this challenge without using any:

Conditionals
Ternary operators
Negations
Bit operators

*/

//  this answer wi using the array 
function flip(n){
    let arr = [1,0];
    return arr.at(n)
}
console.log(flip(1))  //return 0

// answer with using the object 

function flip2(n){
    let obj = {
        1 :0,
        0:1
    }
    return obj[n]
}

console.log(flip2(0))   // return 1
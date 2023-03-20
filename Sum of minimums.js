/* 

Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.
Examples
sumMinimums([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
]) ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

*/
function sumMinimums(arr ){
    let min =0;
    for(let i of arr){
         min += Math.min(...i)
    }
    console.log(min)

}
sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
  ])

//   other answer

function getmin(arr){
    let min =arr[0];
    for(let i  of arr){
        if(i<min){
            min =i;
        }
    } 
    return min;
}

function sumMinimumss(arrs){
    let finalResult = 0;
    for(let arr of arrs){
        finalResult +=getmin(arr);
    }
    return finalResult;

}
console.log(getmin([3,5,6,-1]))
console.log(sumMinimumss([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
  ]))



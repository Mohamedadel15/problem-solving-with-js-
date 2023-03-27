let Name = "mohamed"
let length = 0;


// the first way with the iterable for


// for (index of Name){
//     length++;
//     console.log(index)
// }


// console.log(length)



//  the second way with while loop


let getLength = (Name)=>{
    while(Name[length] !== undefined){
        length++;
    }
    return length;
}
let get_reverse = (arr)=>{
     let length = getLength(arr)
   
    let newArray = [];
    for(let i = length-1 ; i>=0 ; i--){
        newArray.push(arr[i])
    }
    console.log(length)
    return newArray


}
console.log(get_reverse([1,2,3,4,5,6,2,5,6,9]))


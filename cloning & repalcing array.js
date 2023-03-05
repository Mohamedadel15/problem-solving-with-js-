// to return string 
let mainArr = [1,2,4,[5,6]];

let [a,b,c,[d,f]]=mainArr;
let newArr = `[${[a,b,c]},[${[d,f]}]]`
console.log(mainArr.slice(0))


//  first way with array 

let clonArr = [...mainArr];
console.log(clonArr)

// THE second way 
let clonArr1 = Array.from(mainArr);
console.log(clonArr1)

// the third way 

let clonArr2 = mainArr.slice("")
console.log(clonArr2)

// the fourth way

let [g,h,i,k]=mainArr;
console.log([g,h,i,k])
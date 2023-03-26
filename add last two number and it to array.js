const filba=(num)=>{
    let array=[0,1];
    for(let i =2;i<num;i++){
      let [lastValue,nextValue]=array.slice(-2)
    //   other way to get last to number im the array 
    let [last,next]=[array[array.length-2],array[array.length-1]]
    // other way 
    const [last1,next1]=[array.at(array.length-2),array.at(array.length-1)]
    console.log(last1 , next1)
    console.log(last ,next)
      array.push(lastValue + nextValue)
    }
    return array 
  }
  console.log(filba(12))




//    other answer with using while loop 

let countFunction = function (num,array=[0,1]){
    while(num>2){
        let lastValue = array[array.length-1],
         nextValue = array[array.length-2],
         result =lastValue + nextValue;
        array.push(result)
        num--;
    }
    console.log(array)
}
countFunction(12)

//  other answer with using recurse

const recurse =(num,array=[0,1])=>{
  if(num<=2) return array
  let [last,next]=array.slice(-2)
  return recurse(num-1,[...array,last+next])
}
console.log(recurse(15))
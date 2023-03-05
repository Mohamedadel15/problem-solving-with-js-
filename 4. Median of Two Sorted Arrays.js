// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
let a=[1,2]
let b=[3,4,6,9,8,5]
let sum =a.concat(b).sort();
if(sum.length%2===1){
    let result=(sum.length-1)/2
    console.log(`the mediam =  ${sum[result]}`)
}else{
    let result=sum.length/2
    let min_result=result-1
    let solution=(sum[result]+sum[min_result])/2
    console.log(`the mediam = ${solution}`)
}
console.log(sum)
let even =(...sum)=>{
    let numberOFelmnt = sum.length/2;
    console.log("the result of mediaan = "+(sum[numberOFelmnt-1]+sum[numberOFelmnt])/2)

}
even(...sum);
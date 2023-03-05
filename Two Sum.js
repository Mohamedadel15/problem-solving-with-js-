/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Input: nums = [3,2,4], target = 6
Output: [1,2]
Input: nums = [3,3], target = 6
Output: [0,1]
*/
let num=[3,3],
//  [2,7,11,15], [3,2,4],
    target=6;
for(let i=0 ; i<num.length;i++){
    if(num[i]>=target){
        continue;
    }
    if(num[i]+num[i+1]===target){
        console.log(`[${i} , ${i+1}]`);
}
}


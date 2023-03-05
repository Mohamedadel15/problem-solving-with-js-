/*Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
let a="pwwkew"; 
let sum=""
for(let i=0;i<a.length;i++){
    if(sum.includes(a[i])==false){
        sum+=a[i]
    }else{
        sum
    }
}
console.log(sum.length,sum)

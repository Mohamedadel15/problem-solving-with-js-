
// Numbers ending with zeros are boring.

const res = require("express/lib/response")

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


let num = 12321000
const newNum = [...String(num)]
if(newNum.lastIndexOf("0") === -1) {
    console.log("valid")
}
else{
    let result = ""
for(let i = -1; i >= -6;i--){
    if(newNum[i] === 0){
        continue
    }else{
        result = newNum.slice(0,i)
        break
    } 
}
console.log(result)

}

console.log(+newNum[0])
function nameIsZero(num){
    return num
}

console.log(nameIsZero(11230))
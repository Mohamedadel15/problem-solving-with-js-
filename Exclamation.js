// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove(str) {
  if (str.slice(-1) === "!") return str.slice(0, -1);
  else return str;
}
 
//  another solution  
// this answer with using regular exeprtions

function remove2(str) {
    return str.replace(/!$/gi,"")
}

console.log(remove2("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));
console.log(remove("!Hi!"));

/* 
    Create a function that takes an array of hurdle heights and a jumper's jump height, and
    determine whether or not the hurdler can clear all the hurdles.
    A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

    examples
hurdleJump([1, 2, 3, 4, 5], 5) ➞ true

hurdleJump([5, 5, 3, 4, 5], 3) ➞ false

hurdleJump([5, 4, 5, 6], 10) ➞ true

hurdleJump([1, 2, 1], 1) ➞ false
Notes
Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

*/

function hurdleJump(height, hurdle) {
  let maxHeight = Math.max(...height);
  return hurdle >= maxHeight ? true : false;
}
console.log(hurdleJump([1, 2, 3, 4, 5], 5)); //true
console.log(hurdleJump([5, 5, 3, 4, 5], 3)); // false
console.log(hurdleJump([5, 4, 5, 6], 10)); //true
console.log(hurdleJump([1, 2, 1], 1)); // false

// other answer with use the every array

function hurdleJump1(height, hurdle) {
  let result = height.every((e) => {
    return hurdle >= e;
  });
  return result;
}
console.log(hurdleJump1([1, 2, 3, 4, 5], 5));

//  the third answer

function hurdleJump2(height, hurdle) {
  let maxVAlue = height.at(0);
  for (let i of height) {
    i > maxVAlue ? (maxVAlue = i) : false;
  }
  console.log(maxVAlue);
if(hurdle>=maxVAlue){
    console.log(true)
}else{
    console.log(false)
}
}
hurdleJump2([1, 2, 3, 5],5);

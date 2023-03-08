// Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.
function nTablesPlusOne(n) {
  //  this way by using conditional

  let arr = "";
  for (let i = 1; i <= 10; i++) {
    if (i <= 9) {
      arr += i * n + 1;
      arr += ",";
    } else {
      arr += i * n + 1;
    }
  }
  return arr;

  //   the first anser with split

  //   let newArr = arr.split("");
  //   newArr.pop();
  //   return newArr.join("");

//   ----------------------------------------------------
  //  the second answer with spread method

  // let newArr = [...arr];
  // newArr.pop()
  // console.log(newArr.join(""))
}
console.log(nTablesPlusOne(1));
console.log(nTablesPlusOne(7));
console.log(nTablesPlusOne(3));

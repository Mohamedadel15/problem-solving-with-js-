let arr = "mohamed adel";
let count = 0;
for (let i of arr) {
  if (arr.includes(i)) {
    count++;
  } else {
    break;
  }
}
console.log(count);
// console.log(arr.length)

// this way  anser with array
function word(value) {
  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return arr.includes(value)
    ? arr.indexOf(value)
    : `eror !! enter the right number between them ${arr}`;
}
console.log(word("zero"));

//  this way answer with the object
function word1(value) {
  let obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  // with dot notation
  // return obj.value;
  // with bracket notation
  return obj[value];
}
console.log(word("nine"));

//  this way by destructring object
let obj = {
  zero: 0,
  o: 1,
  t: 2,
  th: 3,
  fo: 4,
  fi: 5,
  si: 6,
  se: 7,
  eig: 8,
  n: 9,
};
//  this way it the basic way but by use switch not if

let word2 = (value) => {
    switch(value){
        case "zero": return 0;
        case "one" : return 1;
        case "two" : return 2;
        case "three" : return 3;
        case "four" : return 4;
        case "five" : return 5;
        case "six" : return 6;
        case "seven" : return 7;
        case "eight" : return 8;
        case "nine" : return 9;
        default :return "error";
    }

}
console.log(word2("nin"));
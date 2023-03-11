/*
Given a letter and an array of words, return whether the letter does not appear in any of the words.
orbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false

forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true

forbiddenLetter("m", []) ➞ true

*/
function forbiddenLetter(a, ...b) {
  let regex = new RegExp(a, "gi");
  let result =  regex.test(b.join(""));
  return !result ; 
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));

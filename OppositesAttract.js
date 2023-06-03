// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function OppositesAttract(fNum, secNum) {
  if (fNum % 2 == 0 && secNum % 2 != 0) return true;
  else if (fNum % 2 != 0 && secNum % 2 == 0) return true;
  else return false;
}

console.log(OppositesAttract(1, 4));
console.log(OppositesAttract(1, 3));
console.log(OppositesAttract(2, 4));

//  another solution

function OppositesAttractt(fNum, secNum) {
  return (fNum % 2 === 0) !== (secNum % 2 === 0);
}

console.log(OppositesAttractt(1, 4));
console.log(OppositesAttractt(1, 3));
console.log(OppositesAttractt(2, 4));

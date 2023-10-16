const assertArraysEqual = (a, b) => { // still not comfortable with => but is needed
  if (a.length !== b.length) {
   return false; // created a filter Thanks Gary!
}else {
  for (let i = 0; i < a.length; i++) { //find elements of array
  if (a[i] !== b[i]) { // don't match, false i.e null, 1 or "1", "2"
    return false;
  }
}
return true;
}
}
const assertEqual = function (actual, expected) { // testing 1st cond is t/f
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    // (actual !== expected);
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`); // learned in pair programming, is unecessary repition. 
  }
};

const eqArrays = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
  a.length === b.length && a.every((element, index) => element === b[index]); 
s
  const nestArray = [1,2,3,[4,5,6],7,8,9]; // simple to depth 1
  const flatArray =[]; // empty to log new array
console.log(nestArray.flat()); // expected output [1,2,3,4,5,6,7,8,9]



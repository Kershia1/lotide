// const assertArraysEqual = (a, b) => { // still not comfortable with => but is needed
//   if (a.length !== b.length) {
//    return false; // created a filter Thanks Gary!
// }else {
//   for (let i = 0; i < a.length; i++) { //find elements of array
//   if (a[i] !== b[i]) { // don't match, false i.e null, 1 or "1", "2"
//     return false;
//   }
// }
// return true;
// }
// }
// const assertEqual = function (actual, expected) { // testing 1st cond is t/f
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
//   } else {
//     // (actual !== expected);
//     console.log(`Assertion Failed: ${actual} !== ${expected} 😿`); // learned in pair programming, is unecessary repition. 
//   }
// };

const assertArraysEqual = require("./assertArraysEqual");

// const eqArrays = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
//   a.length === b.length && a.every((element, i) => element === b[i]); 

const flatten = () => {
  const flattenedArray = [];

  // recurse(0, nestedArray, flattenedArray); //basic for loop to iterate
  // return flattenedArray;// output to assess 
  
  function recurse(nestedArray) {
    for (let i =0; i <nestedArray.length; i++) {
    if(i >= nestedArray.length)
    return;// iterate along length of nested array
    if(Array.isArray(nestedArray[i])) { //array.isArray @[i] assess nArr
      recurse(nestedArray[i]); //recursion is scary
    } else {
      flattenedArray.push(nestedArray[i]); //push new array to 1 level
     }
    }
  }
  recurse(nestedArray); //begin recursion
  return flattenedArray;
};

const nestedArray = [1,2,3,[4,5,6],7,8,9]; // simple to depth 1
console.log(flatten(nestedArray)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Tests
const nestedArray1 = [1,5,6,3,4,8,[9,0]];
const flattenedArray1 = flatten(nestedArray1); 
assertArraysEqual(flattenedArray1, [1,5,6,3,4,8,9,0]);

const nestedArray2 = [3,51,5,6,3,4,[8,[9,0]]];
const flattenedArray2= flatten(nestedArray2); 
assertArraysEqual(flattenedArray2, [3,51,5,6,3,4,8,9,0]);

const nestedArray3 = [3,51,5,6,3,4,[8,[9,0]]];
const flattenedArray3= flatten(nestedArray3); 
assertArraysEqual(flattenedArray3, [[3,51,[5,[6]]],3,4,8,9,0]);

module.exports = flatten; 

const assertArraysEqual = require('./assertArraysEqual');

//Returns a subset of a given array, removing unwanted elements.
// with any elements present in the second array removed.

function without(array, toRemove) {
  const newArray = [];
  for (let i = 0; i <array.length; i++) {
    if (!toRemove.includes(array[i])) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

//Check to ensure original Array is not modified:
const originalArray = [1, 2, 3];
console.log("Mutataion Test: ", without(originalArray, [1]));
//Expected output: [2, 3]
assertArraysEqual(originalArray, [1, 2, 3]);
// should pass if originalArray was not modified

console.log('----');

//Test Cases:
console.log("Test Case 1: ");
console.log(without([1, 2, 3], [1]));
//Expected output: [2, 3]

console.log("Test Case 2: ",);
console.log(without(["1", "2", "3"], [1, 2, "3"]));
// Expected output:["1", "2"]

console.log('----');

//Assertion Tests:

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
//Expected output: These arrays are absolutely equal! 🥳

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
//Expected output: TThese arrays are absolutely equal! 🥳

module.exports = without;
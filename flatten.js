const assertArraysEqual = require('./assertArraysEqual');

//A function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = (nestedArray) => {
  const flattenedArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flattenedArray.push(...nestedArray[i]);
    } else {
      flattenedArray.push(nestedArray[i]);
    }
  }
  return flattenedArray;
};

//Test Cases:

//Tests
const nestedArray1 = [1, 5, 6, 3, 4, 8, [9, 0]];
const flattenedArray1 = flatten(nestedArray1);
assertArraysEqual(flattenedArray1, [1, 5, 6, 3, 4, 8, 9, 0]);
//Expected output: "These arrays are absolutely equal! 🥳"

const nestedArray2 = [1, 2, 3, [4, 5, 6], 7, 8, 9]; // simple to depth 1
const flattenedArray2 = (flatten(nestedArray2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
assertArraysEqual(flattenedArray2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//Expected output: "These arrays are absolutely equal! 🥳"

module.exports = flatten;

const assertArraysEqual = require('./assertArraysEqual');

const flatten = () => {
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

const nestedArray = [1, 2, 3, [4, 5, 6], 7, 8, 9]; // simple to depth 1
console.log(flatten(nestedArray)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
//"These arrays are absolutely equal! 🥳"

//Tests
const nestedArray1 = [1, 5, 6, 3, 4, 8, [9, 0]];
const flattenedArray1 = flatten(nestedArray1);
assertArraysEqual(flattenedArray1, [1, 5, 6, 3, 4, 8, 9, 0]);
// => These arrays are not an absolute match! ❌

const nestedArray2 = [3, 51, 5, 6, 3, 4, [8, 9, 0]];
const flattenedArray2 = flatten(nestedArray2);
assertArraysEqual(flattenedArray2, [3, 51, 5, 6, 3, 4, 8, 9, 0]);
// => These arrays are not an absolute match! ❌

const nestedArray3 = [3, 51, 5, 6, 3, 4, [8, [9, 0]]];
const flattenedArray3 = flatten(nestedArray3);
assertArraysEqual(flattenedArray3, [[3, 51, [5, [6]]], 3, 4, 8, 9, 0]);
// => These arrays are not an absolute match! ❌

module.exports = flatten;

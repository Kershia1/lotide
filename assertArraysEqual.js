const eqArrays  = require('./eqArrays');

//returning to original function
const assertArraysEqual = (arr1, arr2) => {
if (eqArrays(arr1, arr2)) { // undefined error located here
  console.log("These arrays are absolutely equal! 🥳");
} else {
console.log("These arrays are not an absolute match! ❌");
  }
};

const arr1 = [5,6,7,8];
const arr2 = [5,6,7,8];

assertArraysEqual(arr1, arr2);

// test values 

// assertArraysEqual(([1, 2, 3], [1, 2, 3]), true); // => should PASS "These arrays are absolutely equal! 🥳"
// assertArraysEqual(([1, 2, 3], [1, 2]), false); // => should FAIL arr.length !== @index [2] "These arrays are not an absolute match! ❌"
// assertArraysEqual(([1, 2, 3], [1, , 3]), false); // => should FAIL undefined @ index [1] "These arrays are not an absolute match! ❌"
// assertArraysEqual(([1, 2, 3], [1, 2, "k"]), false); // => should FAIL string "k" vs integer @ index[2] "These arrays are not an absolute match! ❌"
// assertArraysEqual((["1", 2, 3], [1, 2, 3]), ); // => should FAIL string "1" vs integer @ index[2] testing for implied corecion. "These arrays are not an absolute match! ❌"

module.exports = assertArraysEqual;
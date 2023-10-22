const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

// test values 

assertArraysEqual(([1, 2, 3], [1, 2, 3]), true); // => should PASS "These arrays are absolutely equal! 🥳"
assertArraysEqual(([1, 2, 3], [1, 2]), false); // => should FAIL arr.length !== @index [2] "These arrays are not an absolute match! ❌"
assertArraysEqual(([1, 2, 3], [1, , 3]), false); // => should FAIL undefined @ index [1] "These arrays are not an absolute match! ❌"
assertArraysEqual(([1, 2, 3], [1, 2, "k"]), false); // => should FAIL string "k" vs integer @ index[2] "These arrays are not an absolute match! ❌"
assertArraysEqual((["1", 2, 3], [1, 2, 3]), ); // => should FAIL string "1" vs integer @ index[2] testing for implied corecion. "These arrays are not an absolute match! ❌"

// let arrayX = [1,2,3,4]; 
// let arrayY = ["1","2", 3,4];      
// let arrayZ = [1,null,2,3]
// let arrayW = [1,2,3,undefined];
// let arrayT = [1,2,3,4]; // for True 

// console.log(assertArraysEqual(arrayX, arrayY)); // false please, fail ALL PASSED!!!
// console.log(assertArraysEqual((arrayX, arrayZ)));// false
// console.log(eqArrays(arrayX, arrayW));//false
// console.log(eqArrays(arrayX, arrayT));//true 

// module.export = assertArraysEqual;
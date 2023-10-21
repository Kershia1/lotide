// const eqArraysTest = require('./test/eqArraysTest');
const assertEqual = require('./assertEqual');
const eqArrays = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
  a.length === b.length && a.every((element, index) => element === b[index]);
console.log(eqArrays);

//Sample Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should FAIL arr.length !== @index [2]
assertEqual(eqArrays([1, 2, 3], [1, , 3]), true); // => should FAIL undefined @ index [1]
assertEqual(eqArrays([1, 2, 3], [1, 2, "k"]), true); // => should FAIL string "k" vs integer @ index[2]
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), true); // => should FAIL string "1" vs integer @ index[2] testing for implied corecion

// eqArraysTest(eqArrays(arrV, arrX), true);

module.exports = eqArrays;
// const eqArraysTest = require('./test/eqArraysTest');
const assertEqual = require('./assertEqual');
const eqArrays = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
  a.length === b.length && a.every((element, index) => element === b[index]);
console.log(eqArrays);

//Sample Test

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// eqArraysTest(eqArrays(arrV, arrX), true);

module.exports = eqArrays;
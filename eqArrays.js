// const eqArraysTest = require('./test/eqArraysTest');

const eqArrays = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
  a.length === b.length && a.every((element, index) => element === b[index]);
console.log(eqArrays);

// const arrV = [1,2,3,4]; 
// const arrX = [1,2,3,4];


// eqArraysTest(eqArrays(arrV, arrX), true);

module.exports = eqArrays;
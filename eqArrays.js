const eqArraysTest = require('./test/eqArrays.test');

const eqArrays = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
  a.length === b.length && a.every((element, index) => element === b[index]);
console.log(eqArrays);

module.exports = eqArrays;
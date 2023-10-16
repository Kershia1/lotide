const eqArraysTest = require('./test/eqArraysTest');

const assertEqual = function(actual, expected) { // testing 1st cond is t/f
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`);
  }
};

const eqArrays = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
  a.length === b.length && a.every((element, index) => element === b[index]);
console.log(eqArrays);

module.exports = eqArrays;
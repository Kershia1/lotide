const eqArrays = require('../../eqArrays');
const assertEqual = require('../../assertEqual');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)); // pass
console.log(assertEqual(eqArrays[1,2,3],[3,2,1]), false); // failed
console.log(assertEqual(eqArrays(["1","2","3"],["1","2","3"]), true)); // =>pass need to remeber to wrap properly
console.log(assertEqual(eqArrays(["1","2","3"],["1","2",3]),false));

module.exports = eqArraysTest;
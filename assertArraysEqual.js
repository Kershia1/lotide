const eqArrays = require('./eqArrays');

// try refactoring all equal to check every avaliable input from the array to get a t or f va

const assertArraysEqual = (arrs) => arrs.every(a => b === arrs[0]);

// test values 
let arrayX = [1,2,3,4]; 
let arrayY = ["1","2", 3,4];      
let arrayZ = [1,null,2,3]
let arrayW = [1,2,3,undefined];
let arrayT = [1,2,3,4]; // for True 

console.log(assertArraysEqual(arrayX, arrayY)); // false please, fail ALL PASSED!!!
console.log(assertArraysEqual(eqArrays(arrayX, arrayZ)));// false
console.log(assertArraysEqual(eqArrays(arrayX, arrayW)));//false
console.log(assertArraysEqual(eqArrays(arrayX, arrayT)));//true 

module.exports = assertArraysEqual;
const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

let arrayX = [1,2,3,4]; 
let arrayY = ["1","2", 3,4];      
let arrayZ = [1,null,2,3]
let arrayW = [1,2,3,undefined];
let arrayT = [1,2,3,4]; // for True 

console.log(assertArraysEqual(arrayX, arrayY)); // false please, fail ALL PASSED!!!
console.log(assertArraysEqual((arrayX, arrayZ)));// false
console.log(eqArrays(arrayX, arrayW));//false
console.log(eqArrays(arrayX, arrayT));//true 

module.export = assertArraysEqual;
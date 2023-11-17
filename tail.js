//const assertArraysEqual = require('./assertArraysEqual');

/* 
Returns the "tail" of an array: everything except for the first item (head) of the provided array.
*/
const tail = function(array) {
  let results = [];
return results.push(array.slice(1));
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
   if (actual !== expected)
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`);
  }
};

//Assertion Tests:
//comparing the array.length

// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// Test Case: Check the original array 
const results1 = tail(["Hello"]); 
assertEqual(results1.length, 0);
//Expected output: []

const results2 = tail([]); 
assertEqual(results2.length, 0);
//Expected output: []


const results3 = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual((results3.length), 2);

module.exports = tail;
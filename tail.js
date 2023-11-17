//const assertArraysEqual = require('./assertArraysEqual');

/* 
Returns the "tail" of an array: everything except for the first item (head) of the provided array.
*/
const tail = function(array) {
let results = [];
 const newTail = array.slice(1);
 results.push(newTail);
  return results;
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
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test Case: Check the original array 
const words1 = tail(["Hello"]); 
assertEqual(words1.length, 0);
//Expected output: []

const words2 = tail([]); 
assertEqual(words2.length, 0);
//Expected output: []


const words3 = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words3.length, 2);

module.exports = tail;
//const assertArraysEqual = require('./assertArraysEqual');

/* 
Returns the "tail" of an array: everything except for the first item (head) of the provided array.
*/
const tail = function(array) {
  if( array <= 1) {
    return [];
  } else {
    return array.slice(1);
  }
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

// Test Case: Check the original array is not mutated 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Check 1st element of the returned array matches the 2ed element of the original 
const words1 = ["Yo Yo", "Lighthouse", "Labs"];
const words1Result = tail(words1);
assertEqual(words1Result[0], words1[1]);

// Test Case: Check the new Array
const words2 = ["Hello"];
const words2Result = tail(["Hello"]); 
assertEqual((words2Result[0], words2[1]));
//Expected output: []

const words3 = [];
const words3Result = tail([]); 
assertEqual((words3Result[0], words3[1]));
//Expected output: []


// const results3 = tail(["Yo Yo", "Lighthouse", "Labs"]);
// assertEqual((results3.length), 2);

module.exports = tail;
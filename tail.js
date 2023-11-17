//const assertArraysEqual = require('./assertArraysEqual');

/* 
Returns the "tail" of an array: everything except for the first item (head) of the provided array.
*/
const tail = function(array) {
  if( array.length <= 1) {
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
assertEqual(words1Result.length[0], words1.length[1]);

// Test Case: Check the new Array
const words2 = ["Hello"];
const words2Result = tail(["Hello"]); 
assertEqual((words2Result.length[0], undefined));
//Expected output: []

const words3 = [];
const words3Result = tail([]); 
assertEqual((words3Result.length[0], undefined));
//Expected output: []


const words4 = ["Yo Yo", "Lighthouse", "Labs"];
const words4Result = tail(words4);
assertEqual(words4Result.length[0], words4.length[1]);

module.exports = tail;
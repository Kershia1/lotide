/* 
Returns the "tail" of an array: everything except for the first item (head) of the provided array.
*/
const tail = function(array) {
 const newTail = array.slice(1);
  return newTail;
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

const result = tail(["Hello", "Lighthouse", "Labs"]); //test array
(assertEqual(result, ["Labs"]));
//Expected output:

assertEqual(result, ["Lighthouse", "Labs"]);//pass

const result1 = tail(["Hello"]);
assertEqual(result1, []);// should return an empty array no element 1. 

const result2 = tail([]);
assertEqual(result2, []); // Pass empty array returns empty array

module.exports = tail;
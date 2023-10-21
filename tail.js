const tail = function(array) { //generic array
  const newTail = [];
  newTail.push(...array.slice((1))); //return everything@ 2ed element found
  return newTail; //prevents original tail from becoming mutated
};

const assertEqual = function(actual, expected) { // testing 1st cond is t/f
  if (actual === expected) { // only tail i to compare as A and E
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    (actual !== expected)
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`);
  }
};

// Test values 
//after strings are stringified then compare that the correct elements at the end of the given strings is returned. 

const result = tail(["Hello", "Lighthouse", "Labs"]); //test array
assertEqual(result, ["Labs"]); //fail
assertEqual(result, ["Lighthouse", "Labs"]);//pass

const result1 = tail(["Hello"]);
assertEqual(result1, []);// should return an empty array no element 1. 

const result2 = tail([]);
assertEqual(result2, []); // Pass empty array returns empty array

module.exports = tail;
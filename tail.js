const tail = function(array) { // choose out of aE def as C var to access later 
  return array.slice((1));
};
const assertEqual = function(actual, expected) { // testing 1st cond is t/f
  if (actual === expected) { // only tail i to compare as A and E
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`)
  } else {
    (actual !== expected)
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`)
  }
}
// Test values 
const result = tail(["Hello", "Lighthouse", "Labs"]); //
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

module.exports = tail;
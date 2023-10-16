//step 1
const assertArraysEqual = (a, b) => {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};
const eqArrays = (a, b) =>
  a.length === b.length && a.every((element, index) => element === b[index]);

// step 2 a Implement
const sentence = "hello";

const letterPositions = function (sentence) {
  const results = {}; // empty obj due to {}
  for (let i = 0; i < sentence.length; i++) { //access loop 
      let letter = sentence[i]; //ea ltr is check,sent. [i] val
      if (results[letter]) { // does letter exist yet
        results[letter].push(i); // add add.t pos letter to results array
      } else {
       results[letter] = [i]; // add [i] to new array 
    }
  }
  return results;
}

console.log(letterPositions(sentence)); //log results

assertArraysEqual((letterPositions("hello")).h, [0]); // h:[0]
assertArraysEqual((letterPositions("hello")).e, [1]); // e:[1]
assertArraysEqual((letterPositions("hello")).l, [2,3]); // l:[2,3]
assertArraysEqual((letterPositions("hello")).o, [4]); // o:[4]

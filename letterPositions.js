
const assertArraysEqual = require('./assertArraysEqual');

/*
Returns all the indices (zero-based positions) in the string where each character is located.
*/

const sentence = "hello";

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
      let letter = sentence[i];
      if (results[letter]) {
        results[letter].push(i);
      } else {
       results[letter] = [i];
    }
  }
  return results;
}

console.log(letterPositions(sentence));
//Expected output: { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };

//Assertion Tests:

assertArraysEqual((letterPositions("hello")).h, [0]);
//expected output: These arrays are absolutely equal! 🥳

assertArraysEqual((letterPositions("hello")).e, [1]);
//expected output: These arrays are absolutely equal! 🥳

assertArraysEqual((letterPositions("hello")).l, [2,3]);
//expected output: These arrays are absolutely equal! 🥳

assertArraysEqual((letterPositions("hello")).o, [4]);
//expected output: These arrays are absolutely equal! 🥳

assertArraysEqual((letterPositions("hello")).z, [4]);
//expected output: These arrays are not an absolute match! ❌

module.exports = letterPositions;
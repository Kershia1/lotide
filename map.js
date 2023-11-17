const assertArraysEqual = require('./assertArraysEqual');

/* 
The map function will return a new array based on the results of the callback function.
*/

const eqwordss = (a, b) =>
  a.length === b.length && a.every((element, index) => element === b[index]);
console.log(eqwordss);


const words = ["ground", "control", "to", "major", "tom"];
const wordsX = ["loose", "goose", "caboose", "boost"];
const wordsY = ["1", "2", 3, 4];
const wordsZ = [1, null, 2, "boost"];
const wordsW = [1, 2, 3, undefined];
const wordsT = ["loose", "goose", "caboose", "boost"];

const map = function (words, callback) {
  const results = [];
  for (let element of words) {
    results.push(callback(element));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(wordsX, wordsY));
//Expected output: These arrays are not an absolute match! ❌

console.log(assertArraysEqual(wordsX, wordsZ));
//Expected output: These arrays are not an absolute match! ❌

console.log(assertArraysEqual(wordsX, wordsW));
//Expected output: These arrays are not an absolute match! ❌

console.log(assertArraysEqual(wordsX, wordsT));//true 
//Expected output: These arrays are absolutely equal! 🥳

module.exports = map;

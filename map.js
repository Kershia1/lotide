const assertArraysEqual = require('./assertArraysEqual');

const eqwordss = (a, b) => /* set 2 vars, resuable to loop any arrs :) */
  a.length === b.length && a.every((element, index) => element === b[index]);
console.log(eqwordss);


const words = ["ground", "control", "to", "major", "tom"];
const wordsX = ["loose", "goose", "caboose", "boost"];
const wordsY = ["1", "2", 3, 4];
const wordsZ = [1, null, 2, "boost"];
const wordsW = [1, 2, 3, undefined];
const wordsT = ["loose", "goose", "caboose", "boost"]; // for True x t

const map = function (words, callback) { // a ref words 
  const results = []; // empty to push new words 
  for (let element of words) {  // check each element 
    results.push(callback(element)); // push new words with words 
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(wordsX, wordsY)); // false 
console.log(assertArraysEqual(wordsX, wordsZ));// false
console.log(assertArraysEqual(wordsX, wordsW));//false
console.log(assertArraysEqual(wordsX, wordsT));//true 

module.exports = map;

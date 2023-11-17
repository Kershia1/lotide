const assertEqual = require('./assertEqual');

//This function take in a sentence (as a string) and then return a count of each of the letters in that sentence.

function countLetters(string) {
  let letters = string.split("");
  let obj = {};
  letters.forEach(function(x) {
    if(obj[x]) {
      obj[x]++;
    } else {
      obj[x] = 1;
    }
  });
  return obj;
}

//Test Cases:
const letters = "lowtided";

console.log(countLetters(letters));
//expected output (l: 1, o: 1, w: 1, t: 1, i: 1, d: 2, e: 1);

const letters1 = "missippi";
//expected output (m:1, i:3, s:2, p:2)

assertEqual(countLetters(letters).d, 2);
//expected output pass 

assertEqual(countLetters(letters1).i, 3);
//expected output pass 

module.exports = countLetters;
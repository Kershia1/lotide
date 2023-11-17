const assertEqual = require('./assertEqual');

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
const letters = "lowtided";
//test output

console.log(countLetters(letters));
//expected output (l: 1, o: 1, w: 1, t: 1, i: 1, d: 2, e: 1);

const letters1 = "missippi";
//expected output (m:1, i:3, s:2, p:2)

assertEqual(countLetters(letters).d, 2); //pass 

assertEqual(countLetters(letters1).i, 3); //pass

module.exports = countLetters;
const assertEqual = function(actual, expected) { // testing 1st cond is t/f
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    (actual !== expected);
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`);
  }
};

function countLetters(string) { //input given string
  let letters = string.split(""); //split.method()
  let obj = {}; // empty point for obj ref
  letters.forEach(function(x) { // assess ea element seperatly 
    let count = 0;//start at 0 for each element
    for (let i = 0; i < letters.length; i++) {// work across witdth of string
      if (x === letters[i]) {
        count ++;//for each element counted add to output
      }
    }
    obj[x]; //element is occuring and how manytimes 
  });
  return obj; //return total value after completed cycle of loop
}
const letters = "lowtided";
console.log(countLetters(letters));
//expected output (l: 1, o: 1, w: 1, t: 1, i: 1, d: 2, e: 1);

module.exports = countLetters;
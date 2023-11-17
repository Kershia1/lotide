
const assertArraysEqual = require('./assertArraysEqual');

/* 
Collect's items from a provided array until the callback provided returns a truthy value.
*/

const takeUntil = function (array,callback) {
  const outcome = [];
  for ( const entry of array) { 
    if (callback(entry) === false) {
    outcome.push(entry);
   }else{
    return outcome;
    }
  }
  return outcome;
};

//Test Cases:

//Case 1 Array of Strings:

const data = ["I've", "never", "been", "to", "California", ";but,", "I've been", "to", "Washington", "State", "many", "times"];
const results = takeUntil(data, x => x === ";but,");
//Test Case 1:  [ "I've", 'never', 'been', 'to', 'California' ]
const desiredResults = ["I've", "never", "been", "to", "California"];
assertArraysEqual(results, desiredResults);
/* Expected output: These arrays are absolutely equal! 🥳
[ "I've", 'never', 'been', 'to', 'California' ] [ "I've", 'never', 'been', 'to', 'California']
*/
console.log('Test Case 1: ',results);

console.log('---');

//Case 2 Array of Numbers:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//Test Case 1:  [ 1, 2, 5, 7, 2 ]
const desiredResults1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, desiredResults1);
//Expected output: These arrays are absolutely equal! 🥳

console.log('Test Case 1: ',results1);

console.log('---');

//Case 3 A diffrent Array of Strings:
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const desiredResults2 = ["I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, x => x === ',');
// Test Case 2:  [ "I've", 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2, desiredResults2);
//Expected output: These arrays are absolutely equal! 🥳
console.log('Test Case 2: ',results2);
console.log('---');

//Case 4 Using a diffrent callback:
const data3 = ["I've", "never", "been", "to", "California", ";but,", "I've been", "to", "Washington", "State", "many", "times"];
const desiredResults3 = ["I've", "never", "been", "to", "California"];
//Test Case 3:  undefined
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, desiredResults3);
//Expected output: These arrays are not an absolute match! ❌
console.log('Test Case 3: ',results3);
module.exports = takeUntil;
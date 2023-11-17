
const assertArraysEqual = require('./assertArraysEqual');

/* 
Collect's items from a provided array until the callback provided returns a truthy value.
*/

const takeUntil = function (array,callback) {
  const outcome = []; // empty array to push to 
  for ( const entry of array) { 
    if (callback(entry)=== false) {
    outcome.push(entry);
   }else{
    return outcome;
    }
  }
};

//Test Cases:

const data = ["I've", "never", "been", "to", "California", ";but,", "I've been", "to", "Washington", "State", "many", "times"];
const results = takeUntil(data, x => x < 0);
console.log(results);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["I've", "never", "been", "to", "California", ";but,", "I've been", "to", "Washington", "State", "many", "times"];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3);

assertArraysEqual(results1, results2); //fail 
//Expected output: 

assertArraysEqual(results, results3); //pass
//Expected output: 

module.exports = takeUntil;
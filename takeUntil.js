// this is wrong and needs to be refactored or just re-written
const assertArraysEqual = require('./assertArraysEqual');

const array1 = ["I've", "never", "been", "to", "California", ";but,", "I've been", "to", "Washington", "State", "many", "times"];

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;
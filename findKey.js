const assertEqual = require('./assertEqual');

/*findKey takes in an object and a callback; returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"


assertEqual(result, "noma"); //"noma"

module.exports = findKey;
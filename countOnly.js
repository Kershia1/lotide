const assertEqual = require('./assertEqual'); 

//Count all the strings found in the input array, and their respective counts.
//Returned as an object to better interpert the returned data.
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//Test Cases:

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

(assertEqual(result1["Jason"], 1));
//expected output passed
(assertEqual(result1["Karima"], undefined));
//expected output passed
(assertEqual(result1["Fang"], 2));
//expected output passed
(assertEqual(result1["Agouhanna"], 3));
//expected output fail 

module.exports = countOnly;

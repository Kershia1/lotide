const assertEqual = require('./assertEqual'); 

// allItems: arr of strings to iterate through
//itemsToCount: obj specifying what to count
const countOnly = function (allItems, itemsToCount) { // declared func, step 1
  const results = {}; //empty object literal

  for (const item of allItems) { // count everything
    if (itemsToCount[item]) { // comparing each value to the key "item"
      if (results[item]) {
        results[item] += 1; // allows it to iterate an additonal value.
      } else {
        results[item] = 1; // returns result
      }
    }
  }
  return results; // what will be finally printed after looping through the given parameters
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang", // rep will only return this one, stack rule 1st in last out
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1)); // dosen't exist,no return
console.log(assertEqual(result1["Karima"], undefined)); // ""
console.log(assertEqual(result1["Fang"], 2)); // returns 2 with += opperator
console.log(assertEqual(result1["Agouhanna"], undefined)); // loop skips due toundefined even though included

module.exports = countOnly;

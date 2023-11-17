const assertEqual = require('./assertEqual');

// This function takes an object and a value, and returns the first key in the object that has that value.

const findKeyByValue = (object, value) => {
  for (let property in object) {
    if (object[property] === value) {
      return property;
    }
  }
};

//Testing Object

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");

//Assertion Tests:

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//Expected output: Assertion Passed: drama === drama ✅

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
//Expected output: Assertion Passed: sciFi === sciFi ✅

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
//Expected output: Assertion Passed: comedy === comedy ✅

assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), "humor");
//Expected output: Assertion Failed: undefined !== humor 😿

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "historical"); //Expected output: Assertion Failed: drama !== historical 😿

module.exports = findKeyByValue;
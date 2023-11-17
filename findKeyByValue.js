const assertEqual = require('./assertEqual');

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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi"); //pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");//pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), "humor");//fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "historical"); //fail
module.exports = findKeyByValue;
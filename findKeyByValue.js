const assertEqual = function (actual, expected) { // testing 1st cond is t/f
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else { //( actual !== expected), unecessary rep
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`);
  } 
};
// try generic obj and value?, use .hasOwnPropertyMethod, not [key]
const findKeyByValue=(object, value)=>{ //object, value para's
  for (let property in object) { // iterate obj properties
    // if (Object.hasOwnProperty(property)) { //check properties 
      if (object[property] === value) { // if property of value matches key
      //  return property;
      console.log(`returning true key:, key`)
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

callback = findKeyByValue(bestTVShowsByGenre, "The Wire"); 
console.log(callback);


// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")); // undefined

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire")); // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse")); //pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show" ));//fail
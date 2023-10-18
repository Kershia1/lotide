//test to determine if given arrays are equal or not
const eqArrays = require('./eqArrays'); 
const eqObjects = require('./eqObjects');

// Test to compare objects if they are absolutely equal or not.
const assertObjectsEqual = function (actual, expected) { // generic test of objects
  const inspect = require('util').inspect; // <= add this line, converts to string from util library
  if (eqObjects(actual, expected)) { //pass in actual and expected objects
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅`); //log if objects are equal or not with emoji for easier reading
  } else {
    (eqObjects(actual !== expected));//if objects are not equal
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 😿`); //if objects are not equal, log this
  }
};

// Test Code 
const testAssertObjectsEqual = function () {
  object1 = { a: '1', b: 2 };
  object2 = { b: 2, a: '1' };
  object3 = { a: '1', b: 2, c: 3 };

  //Test 1 - pass
  assertObjectsEqual(object1, object2); // => should PASS

  //Test 2 - fail
  assertObjectsEqual(object1, object3); // => should FAIL
}; // passed?!?!?!?!

testAssertObjectsEqual(); // => should PASS
//output Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

module.exports = assertObjectsEqual;

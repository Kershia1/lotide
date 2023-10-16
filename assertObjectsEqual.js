//test to determine if given arrays are equal or not

const eqArrays = (a, b) => //set 2 vars, resuable to loop any arrs :) 
  a.length === b.length && a.every((element, index) => element === b[index]);

const eqObjects = function (object1, object2) {
  for (obj1 in object1) { //iterate through object1, 
    for (obj2 in object2) { //iterate through object2, 
      if (Array.isArray(object1[obj1]) && Array.isArray(object2[obj2])) { //if keys are absolutely the same, and both are arrays
        if (!eqArrays(object1[obj1], object2[obj2])) { //if values are the same
          return false; //return false if values are not the same 
        } else { 
          console.log(`Assertion Failed: ${actual} !== ${expected} 😿`); //if objects are not equal, log this
          return false; //return false if values are not the same
        }
      }
    }
  }
  return true; // return true if values are the same,
};

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

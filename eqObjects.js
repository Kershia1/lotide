const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');

const eqObjects = function (object1, object2){
  for (obj1 in object1) {
    for (obj2 in object2) {
      if (Array.isArray(object1[obj1]) && Array.isArray(object2[obj2])) { 
        if (!eqArrays(object1[obj1]), (object2[obj2])) {
          return false;
        } else {
          if (object1[obj1] !== object2[obj2]);
            return false;
        }
      }
    }
  }
  return true; // return true if values are the same,
};


//Test Cases: 

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject);
 //expected output: true

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => should PASS
 //expected output: true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);
 //expected output: Assertion Passed: true === true ✅
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
 //expected output: Assertion Passed: true === true ✅

//Test Code
console.log(eqObjects(shirtObject, anotherShirtObject));
 //expected output: true

console.log(eqObjects(shirtObject, longSleeveShirtObject));
 //expected output: false

module.exports = eqObjects;
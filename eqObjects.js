const eqArrays = (a, b) =>
  a.length === b.length && a.every((element, index) => element === b[index]);

const assertEqual = function (actual, expected){
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else { //( actual !== expected), unecessary rep
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`);
  }
};

//Are the objects equal
const eqObjects = function (object1, object2){
  for (obj1 in object1) { //iterate through object1,
    for (obj2 in object2) { //iterate through object2,
      if (Array.isArray(object1[obj1]) && Array.isArray(object2[obj2])) { //ifkeys are absolutely the same, and both are arrays
        if (!eqArrays(object1[obj1]), (object2[obj2])) { //if values are thesame
          return false; //return false if values are not the same
        } else { // what are primitives again?! Right the opposite of objects,so if they are not arrays, they are primitives
          if (object1[obj1] !== object2[obj2]) //if values are not the same
            return false; //return false if values are not the same
        }
      }
    }
  }
  return true; // return true if values are the same,
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => should PASS

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => should PASS

//Test Code
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

module.exports = eqObjects;
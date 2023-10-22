const eqArrays = (arr1, arr2) => {
  // let index = [];
  if (arr1.length !== arr2.length) { // undefined error located here 
    //check if lengths match
    return false;
  } else
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.every[i] !== arr2.every[i]) {
        //check if elements match
        return false;
      }
    }
  return true;
};

const arr1 = [5,6,7,8];
const arr2 = [5,6,7,8];

console.log(eqArrays(arr1, arr2));

// console.log(arr1.every(eqArrays))
// console.log(arr2.every(eqArrays));
// //Sample Test
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should FAIL arr.length !== @index [2]
// assertEqual(eqArrays([1, 2, 3], [1, , 3]), false); // => should FAIL undefined @ index [1]
// assertEqual(eqArrays([1, 2, 3], [1, 2, "k"]), false); // => should FAIL string "k" vs integer @ index[2]
// assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), ); // => should FAIL string "1" vs integer @ index[2] testing for implied corecion

// // eqArraysTest(eqArrays(arrV, arrX), true);

module.exports = eqArrays;
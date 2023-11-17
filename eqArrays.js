//a function that can compare two arrays for a perfect match.

const eqArrays = (arr1, arr2) => {
  if(arr1 === undefined || arr2 === undefined)  {
    return false;

  } else if (arr1.length !== arr2.length) {
    return false;

  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  return true;
  }
};

// Test Cases:

const arr1 = [5,6,7,8];
const arr2 = [5,6,7,8];
const arr3 = [5,6,7,8,9];

console.log(eqArrays(arr1, arr2));
//expected output: true

console.log(eqArrays(arr1, arr3));
//expected output: false

module.exports = eqArrays;
const eqArrays  = require('./eqArrays');

// try refactoring all equal to check every avaliable input from the array to get a t or f va

// const assertArraysEqual = (arrs) => arrs.every(a => b === arrs[0]);
//returning to original function
const assertArraysEqual = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }

  for(let i = 0; i <arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
}
// test values 

const arr = [0,1,1,1];
const arr2 = [0,1,1,1];
assertArraysEqual(eqArrays(arr, arr2), true); 

module.exports = assertArraysEqual;
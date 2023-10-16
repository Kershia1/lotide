const assertArraysEqual = require('./lotide/assertArraysEqual');
const middleTest = require('./lotide/test/middleTest');

//Step 2 Middle will use Math.floor(arr.length /2); find the exact middle by finding the excat integer and rounding down
let arr = [1,2,3,4];

const middle = (arr) => {
  let mid =  Math.floor((arr.length) / 2);
  if (arr.length % 2 === 0 && arr.length > 3) {
    return [arr[mid - 1], arr[mid]];// 2 middle less 1 from middle and mid value s
  } else { (arr.length % 2 === 0 && arr.length <= 3)
    return [arr[mid]]; // [] to access element, not ()
    }
  };

const arr1 = [1,2,3];//2 returns undefined
const arr2 = [1,2,3,4]; //3,4 returns undefined

console.log(middle(arr1)); 
//expected output [2]
console.log(middle(arr2));
//expected output [2,3]

//Step 3 Tests to use:
//not working cannot return .length of undefined
assertArraysEqual(middleTest(arr2), [true, 2,3]);
assertArraysEqual(middleTest[1,2,3],true);
assertArraysEqual(middleTest[1,2,3,4],true);

module.exports = middle;
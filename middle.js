//Take in an array and return the middle-most element(s) of the given array.
// if less than 3 it shall return an empty array

const middle = (arr) => {
  let mid = Math.floor((arr.length) / 2);
  if (arr.length <= 2) {
    return [];
  } else {
    if (arr.length % 2 === 0 && arr.length >= 4) {
      return arr.slice(mid - 1, mid + 1);
    }
  }
  return [arr[mid]];
};

//Test Variable and Cases
const arr1 = [1,2,3];//2 returns undefined
const arr2 = [1,2,3,4]; //3,4 returns undefined
const arr3 = [1,2]; // []


console.log(middle(arr1)); 
//expected output [2]
console.log(middle(arr2));
//expected output [2,3]
console.log(middle(arr3));
//expected output []

module.exports = middle;

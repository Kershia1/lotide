//Take in an array and return the middle-most element(s) of the given array.
// if less than 3 it shall return an empty array

const middle = (arr) => {
  let mid = Math.floor((arr.length) / 2);
  let newArray = [];

  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 0) {
    newArray.push((mid), (mid + 1));
  } else {
    newArray.push(mid + 1);
  }
  return newArray;
};


//Test Variable and Cases
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2];

console.log(middle(arr1));
//expected output [2]
console.log(middle(arr2));
//expected output [2,3]
console.log(middle(arr3));
//expected output []

module.exports = middle;

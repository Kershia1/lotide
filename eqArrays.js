const eqArrays = (arr1, arr2) => {
  //did not account for undefined arrays, causing error on line 5
  if(arr1 === undefined || arr2 === undefined)  {
    return false;
  } else if (arr1.length !== arr2.length) { // undefined error located here 
    //check if lengths match
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        //check if elements match at same location 
        return false;
      }
    }
    //nothing was failed return true 
  return true;
  }
};

const arr1 = [5,6,7,8];
const arr2 = [5,6,7,8];

console.log(eqArrays(arr1, arr2));

module.exports = eqArrays;
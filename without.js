//STEP 1 port aAE function (will use to create test cases) and eA function 

const assertArraysEqual = (a, b) => { // still not comfortable with => but is needed
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) { //find elements of array
      if (a[i] !== b[i]) { // don't match, false i.e null, 1 or "1", "2"
        return false;
      }
    }
    return true;
  }
};

const eqArrays = (a, b) => 
  a.length === b.length && a.every((element, index) => element === b[index]);

function without(a, b) {
  const newArray = [];// new array to push correct elements to
  for (let i = 0; i < a.length; i++) { //correct 
    if (b.includes(a[i])) { // includes(searchElement, fromIndex) compares, returns bool, create new array with re ele
      newArray.push(a[i]); 
      console.log(newArray);// return newArray;
    }
  } 
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
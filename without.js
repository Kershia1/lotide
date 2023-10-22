const assertArraysEqual = require('./assertArraysEqual');

function without(og, toRemove) {
  const newArray = [];// new array to push correct elements to
  for (let h = 0; h < og.length; h++) { //correct 
    for(let i =0; i < toRemove.length; i++)
      if( og === toRemove) {
        newArray.push(og[i])
        console.log(newArray);
      }
  } 
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

module.exports = without;
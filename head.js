const assertEqual = require('./assertEqual');

// A function for arrays is to retrieve the first element from the array.

const head = function(array){
  return array[0];
};

//Assertion Tests: 

assertEqual(head(["Omnomnom",7,9]),9);
//Expected output: Assertion Failed: Omnomnom !== 9 😿

assertEqual(head(["Omnomnom",7,9]),"Omnomnom");
//Expected output: Assertion Passed: Omnomnom === Omnomnom ✅

module.exports = head;
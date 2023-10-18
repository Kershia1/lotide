const assertEqual = require('./assertEqual');
const headTest = require('../headTest');


const head = function(array){
  return array[0];
};


// const head = (array) => array[0];//only 1st indexed value to compare as A and E

//Test values
// assertEqual(head([5, 6, 7]), 5);//5 === 5 pass
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//Hello === Hello pass
// assertEqual(head([""]),4);//"" !== 4 fail
assertEqual(head(["Omnomnom",7,9]),9);//"Omnomnom" !== 9 
headTest(head(["Omnomnom",7,9]),9); //fail

module.exports = head;
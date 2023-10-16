// const ogAssertEqual = function(a,b) { // parameters to pass values
//   let a = "Lighthouse Labs"; // defined variables with assign op 
//   let b = "Lighthouse Labs";
//   if(a === b) { // arguments boolean true, with compar op 
//   return a === b; // output if true
//   } else if(a !== b); // boolean false 
//   return a!==b; // output if false 
// };

// // Test Code 
// ogAssertEqual("Lighthouse Labs", "Bootcamp"); // "" values to pass in args to test
// ogAssertEqual(1,1); // int values to pass 
// */

//Try 2
const ogAssertEqual = function (actual, expected) { // testing 1st cond is t/f
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`)
 }else{ //( actual !== expected), unecessary rep
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`)}
  };
 // Test values 
 // parameter a 
console.log(ogAssertEqual("Lighthouse Labs", "Lighthouse Labs")); // pass 
console.log( ogAssertEqual("Lighthouse Labs","Webinar")); // fail 
console.log(ogAssertEqual(1,1)); // pass
console.log(ogAssertEqual(1,3)); // fail

module.exports = ogAssertEqual;
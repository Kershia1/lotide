const assertEqual = require('../..lotide/assertEqual');

// Test values
// parameter a
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs")); // pass
console.log(assertEqual("Lighthouse Labs", "Webinar")); // fail
console.log(assertEqual(1, 1)); // pass
console.log(assertEqual(1, 3)); // fail

module.exports = assertEqualTest;
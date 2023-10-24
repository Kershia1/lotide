const assertEqual = require('../assertEqual');

 // pass
 describe("#assertEqual", () => {
  it("These strings are equal and pass 🧵", () => {
    assertEqual("Lighthouse Labs", "Lighthouse Labs");
  });
 });

 //pass
 it("These number are unequal and do pass 🧵", () => {
  assertEqual(1, 1);
});

 //fail
 it("These strings are unequal and do not pass 🚫  ", () => {
  assertEqual("Lighthouse Labs", "Webinar");
});

//fail
it("These numbers are unequal and do not pass 🚫  ", () => {
  assertEqual(1, 3);
});
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual("Lighthouse Labs", "Webinar"); // fail
// assertEqual(1, 1); // pass
// assertEqual(1, 3); // fail

// module.exports = { assertEqualTest };
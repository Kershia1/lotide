const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it('should return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('should return false for [1,2,3],[3,2,1]', () => {
    assert.isFalse(eqArrays([1,2,3],[3,2,1]));
  });
  it('should return true for ["1","2","3"],["1","2","3"]', () => {
    assert.isTrue(eqArrays(["1","2","3"],["1","2","3"]));
  });
  it('should return false for ["1","2","3"],["1","2",3]', () => {
    assert.isFalse(eqArrays(["1","2","3"] ,["1","2",3]));
  });
});

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)); // pass
// console.log(assertEqual(eqArrays[1,2,3],[3,2,1]), false); // failed
// console.log(assertEqual(eqArrays(["1","2","3"],["1","2","3"]), true)); // =>pass need to remeber to wrap properly
// console.log(assertEqual(eqArrays(["1","2","3"],["1","2",3]),false));

// module.exports = eqArraysTest;
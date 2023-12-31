const assert = require('chai').assert;
const middle = require('../middle');


//Mocha and Chai tests:
describe('#middle', function () {
  it('should return [2] from input of [1, 2, 3]', function () {
    const input = [1, 2, 3];
    const expected = [2];
    assert.deepEqual(middle(input), expected);
  }); 

  it('should return [2, 3] for an input of [1, 2, 3, 4]', function () {
    const input = [1, 2, 3, 4];
    const expected = [2, 3];
    assert.deepEqual(middle(input), expected);
  });

  it('should return [] for an input of [1, 2]', function () {
    const input = [1, 2];
    const expected = [];
    assert.deepEqual(middle(input), expected);
  });

  it('should return [] for an input of []', function () {
    const input = [];
    const expected = [];
    assert.deepEqual(middle(input), expected);
  }); 
});

// module.exports = {middleTest};
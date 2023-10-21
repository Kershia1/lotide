const assert = require('chai').assert; 
const tail = require('../tail'); 

//pass
describe('#tail', function () {
  it('should return ["Lighthouse", "Labs"] from input ["Hello", "Lighthouse", "Labs"]', function () {
    const input = ["Hello", "Lighthouse", "Labs"];
    const output = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expected);
  });

  //pass
  it('should return ["Labs"] from input ["monkey", "funky", "Labs"]', function () {
    const input = ["monkey", "funky", "Labs"];
    const output = ["Labs"];
    assert.deepEqual(tail(input), expected);
  });
});

// module.export = tailTest;
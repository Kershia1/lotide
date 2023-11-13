const assert = require('chai').assert; 
const tail = require('../tail'); 

//pass
describe('#tail', function () {
  it('should return ["Lighthouse", "Labs"] from input ["Hello", "Lighthouse", "Labs"]', function () {
    const input = ["Hello", "Lighthouse", "Labs"];
    const output = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), output);
  });

  //pass
  it('should return ["monkey"] from input ["funky", "monkey"]', function () {
    const input = ["funky", "monkey"];
    const output = ["monkey"];
    assert.deepEqual(tail(input), output);
  });


  //pass
  it('should return ["funky"] from input ["funky"]', function () {
    const input = ["funky"];
    const output = [];
    assert.deepEqual(tail(input), output);
  });
});

// module.export = tailTest;
const assert = require('chai').assert;
const head = require('../head');

//pass
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

//pass
it("returns '5' for ['5']", () => {
assert.strictEqual(head(['5']), '5');
});

//fail
it("returns '5' for ['8']", () => {
  assert.strictEqual(head(['5']), '5');
  });


//Test values
// assertEqual(head([5, 6, 7]), 5);//5 === 5 pass
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//Hello === Hello pass
// assertEqual(head([""]),4);//"" !== 4 fail
// assertEqual(head(["Omnomnom",7,9]),9);//"Omnomnom" !== 9 

// module.export = headTest;
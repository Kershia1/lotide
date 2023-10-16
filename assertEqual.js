const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else { //( actual !== expected), unecessary rep
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`);
  }
  return assertEqual;
};

module.exports = assertEqual;

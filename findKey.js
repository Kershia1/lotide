const assertEqual = function (actual, expected) { // testing 1st cond is t/f
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`)
 }else{ //( actual !== expected), unecessary rep
    console.log(`Assertion Failed: ${actual} !== ${expected} 😿`)}
  };
// try generic obj and values?
  const findKeyByValue = function(bestTVShowsByGenre, values) { // not defined
    for (let key in values ) { // iterate obj
      if (bestTVShowsByGenre[key] === values) { // if value is equal to values
        return key; // return key
      }
    }
    return undefined; // else return undefined
  };

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  console.log(Object.keys(bestTVShowsByGenre)); 
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

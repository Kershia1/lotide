const assertEqual = require('./assertEqual');

//define function and create callback
function findKey(object, callback) {
  for ( key in object) { // look inside object
    if(object.hasOwnProperty(key) && callback(object[key])) { //are there keys
      return key; //if there are return
    }
    return callback;
  }
  return undefined; //if not nothing to return
};

  const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

callback = (x) => {
  return (result, callback)
};

assertEqual(findKey(result, "noma"), true, "noma"); // "noma"
  
const testObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}; 

function oddity(test) { 
  return test % 1 === 0;
}

const results = findKey(testObject,oddity); 
console.log(results); // 1st odd value found is 1 returns a. 

  module.exports = findKey;
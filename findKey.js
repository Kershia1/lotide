const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (let key in object) {
    //break this down passing too much in 1 conditional statement
    if (object.hasOwnProperty(key)) {
      if (typeof callback === 'function' && callback(object[key])) { //still not a function, remeber cats as a service
        return key;
      }
    }
  }
  return undefined;
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"


assertEqual(result, "noma"); //"noma"

/* eslint error 
 * 

error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins

 * https://stackoverflow.com/questions/39282873/object-hasownproperty-yields-the-eslint-no-prototype-builtins-error-how-to
 * 
 * 
 * suggestion 
 * Object.prototype.hasOwnProperty.call(obj, prop);
 * 
less fiddly option
This is the way to go in 2022. It has good browser support, is shorter and easier to remember than the accepted answer, and solves the problem ESLint is complaining about. MDN says, Note: Object.hasOwn() is intended as a replacement for Object.hasOwnProperty(). See tomdn.com?object.hasOwn. – 
salsbury
 Aug 19, 2022 at 15:20 

 Object.hasOwn(obj, prop)

 Parameters
obj
The JavaScript object instance to test.

prop
The String name or Symbol of the property to test.
 */

module.exports = findKey;
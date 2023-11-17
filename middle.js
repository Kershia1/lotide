//Step 2 Middle will use Math.floor(arr.length /2); find the exact middle by finding the excat integer and rounding down
const middle = (arr) => {
  let mid = Math.floor((arr.length) / 2);
  if (arr.length % 2 === 0 && arr.length > 3) {
    return [arr[mid - 1], arr[mid]];// 2 middle less 1 from middle and mid value s
  } else if  (arr.length % 2 === 0 && arr.length < 4) {
    return arr.slice(mid, mid + 1);
  } else if (arr.length === 3) {
  //return arr only at index[1] middle of 3 element array
    return [arr[mid]];
  } else {
    (arr.length < 3);
    return [];
  }
};

module.exports = middle;

//Take in an array and return the middle-most element(s) of the given array.
// if less than 3 it shall return an empty array

const middle = (arr) => {
  if (arr.length <= 2) {
    return [];
  } else {
    let mid = Math.floor((arr.length) / 2);

    if (arr.length % 2 === 0 && arr.length >= 4) {
      return arr.slice(mid - 1, mid + 1);
    }
  }
  return [arr[mid]];
};

module.exports = middle;

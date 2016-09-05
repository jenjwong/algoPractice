
'use strict';

const findPivot = (array, start, end) => {
  if (array.length === 1) {
    return 0;
  }

  if (start > end) {
    return -1;
  }
  const mid = Math.floor(start + ((end - start)/2));
debugger
  if (array[mid -1] === undefined && array[mid + 1][0] > array[array.length-1][0]) {
    return mid;
  }
  if (array[mid +1] === undefined && array[mid - 1][0] > array[array.length-1][0]) {
    return mid;
  }

  if (array[mid][0] <= array[array.length-1][0] && array[mid -1][0] >= array[array.length-1][0] && array[mid +1][0] <= array[array.length-1][0]) {
    return mid;
  }
  if(array[mid][0] > array[end][0]) {
    return findPivot(array, mid + 1, end);
  } else {
    return findPivot(array, start, mid - 1);
  }
}

module.exports = findPivot;

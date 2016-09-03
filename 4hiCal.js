'use strict'

const findOverLap = (array) => {
  const overLap = [];

  const sortedArray = array.sort((a, b) => a.startTime - b.startTime);

  let i = 0;
  let beginning;
  let run = false;

  while (i < sortedArray.length) {
    if (!run) {
      beginning = sortedArray[i].startTime;
    }

    if (sortedArray[i + 1] && sortedArray[i].endTime >= sortedArray[i + 1].startTime) {
      run = true;
      i++;
    } else {
      overLap.push({ startTime: beginning, endTime: sortedArray[i].endTime });
      run = false;
      i++;
    }
  }
  return overLap;
};

module.exports = findOverLap;

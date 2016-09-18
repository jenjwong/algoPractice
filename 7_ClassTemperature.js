'use strict';

// Write a class TempTracker with these methods:
//
// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns the mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.
//
// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range
// 0
// .
// .
// 1
// 1
// 0
// 0..110.

class TempTracker {
  constructor() {
    this.max = null;
    this.min = null;

// Properties tracking mean
    this.mean = 0;
    this.runningTotalTemps = null;
    this.count = 0;

// Keep track of mode by making an array.
// Temperature can be used to index into array and increment count.
    this.modeCounterArray = [];
    for (let i = 0; i < 111; i++) {
      this.modeCounterArray.push(0);
    }
    this.mode = [];
    this.modeCount = 0;
  }

  insert(temp) {
    if (temp > this.max) {
      this.max = temp;
    }

    if (temp < this.min) {
      this.min = temp;
    }

// calculate mean
    this.runningTotalTemps = this.runningTotalTemps + temp;
    this.count += 1;
    this.mean = this.runningTotalTemps / this.count;

// calculate mode

    this.modeCounterArray[temp] += 1;
    if (this.modeCounterArray[temp] > this.modeCount) {
      this.modeCount ++;
      this.mode = [temp];
    } else if (this.modeCounterArray[temp] === this.modeCount) {
      this.mode.push(temp);
    }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}

module.exports = TempTracker;

const util = require('util');
const expect = require('chai').expect;
const findOverLap = require('../4hiCal.js');

const inputParam = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

const inputParam1 = [
  { startTime: 0, endTime: 1 },
  { startTime: 1, endTime: 5 },
];

const outputParam = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];

const outputParam1 = [
  { startTime: 0, endTime: 5 },
];

const testCases = new Map();
testCases.set(inputParam, outputParam);
testCases.set(inputParam1, outputParam1);

// enables node to print full objects instead of [object, object]
const print = obj => util.inspect(obj, false, null);

describe('findOverLap',() => {
  testCases.forEach(function(item, key) {
    it(`${print(key)} should equal ${print(item)}`, () => {
      const testFunc = findOverLap(key);
      expect(testFunc).to.deep.equal(item);
    });
  });
});

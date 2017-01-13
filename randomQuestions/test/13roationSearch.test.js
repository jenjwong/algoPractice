'use strict';

const expect = require('chai').expect;
const findPivot = require('../13arrayRotation.js');

describe('findPivot', () => {
  const testCases = new Map();
  testCases.set(['z', 'a', 'b', 'c'], 1);
  testCases.set(['x', 'z', 'a', 'b', 'c'], 2);
  testCases.set(['z'], 0);
  testCases.set(['z', 'a'], 1);

  testCases.forEach((item, key) => {
    it(`should find the pivot ${key} equals ${item}`, () => {
      expect(findPivot(key, 0, key.length - 1)).to.equal(item);
    });
  });
});

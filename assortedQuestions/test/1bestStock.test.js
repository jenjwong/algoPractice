'use strict';

const expect = require('chai').expect;
const should = require('chai').should();
const _ = require('lodash');

const bestPrice = require('../1bestStock.js');

describe('bestStock', () => {
  let input = { '[1, 2, 3, 4, 5]': 4,
                '[9, 3, 1]' : -2,
                '[1]' : -1,
              };
  _.forEach(input, (value, key) => {
    let array = JSON.parse(key);
    it(`input ${array} should return ${value}`, () => {
      let testFunc = bestPrice(array);
      expect(testFunc).to.equal(value);
    });
  });
});

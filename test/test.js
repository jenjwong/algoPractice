"use strict";

const _ = require('lodash');
const expect = require('chai').expect;
const algo = require('../run.js');



describe('isPallindrom', () => {
  let input = { 'abba': true,
                'aba': true };
    _.forEach(input, function(value, key) {
      it(`it ${key} should return ${value}`, () => {
        expect(algo.isPallindrom(key)).to.equal(value);
      })
    })
});

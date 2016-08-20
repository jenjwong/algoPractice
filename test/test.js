

(function() {
  'use strict';

  const _ = require('lodash');
  const expect = require('chai').expect;
  const algo = require('../run.js');

  describe('isPallindrom', () => {
    let input = { 'abba': true,
                  'aba': true,
                  'a': true,
                  'aws': false,
                  'awdfdss': false,
                  'xxx': true};
    _.forEach(input, (value, key) => {
      it(`input ${key} should return ${value}`, () => {
        let testFunc = algo.isPallindrom(key);
        expect(testFunc).to.equal(value);
      });
    });
  });
}());

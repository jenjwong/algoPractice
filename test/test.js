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

describe ('isAnagram', () => {

  it('abc, cab is anagram: true', () => {
      let testFunc = algo.isAnagram('abc', 'cab');
      expect(testFunc).to.equal(true);
  });  

  it('ABc, cAb is anagram: true', () => {
    let testFunc = algo.isAnagram('ABc', 'cAb');
    expect(testFunc).to.equal(true);
  });   

  it('iamChampion, loser is anagram: false', () => {
    let testFunc = algo.isAnagram('iamChampion', 'loser');
    expect(testFunc).to.equal(false);
  });  

  it('ab, a is anagram: false', () => {
    let testFunc = algo.isAnagram('a', 'ab');
    expect(testFunc).to.equal(false);
  });
});



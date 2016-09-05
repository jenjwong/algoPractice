'use strict';

const expect = require('chai').expect;
const findMovieMatch = require('../14flightMovies.js');

describe('findMovieMatch', () => {
  const testCases = new Map();
  testCases.set([[90], [45,45]], true);
  testCases.set([[0], [45,45]], false);
  testCases.set([[30], [20, 20, 30, 10]], true);
  testCases.set([[30], []], false);

  testCases.forEach((answer, params) => {
    it(`${params[0]}, ${params[1]} should be ${answer}`, () => {
      expect(findMovieMatch(params[0], params[1])).to.equal(answer);
    })
  })
});

const expect = require('chai').expect;
const findOverlap = require('../6rectangleOverlap.js');

const rec1 = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4,
};
const rec2 = {
  leftX: 2,
  bottomY: 2,
  width: 4,
  height: 3,
};
const rec3 = {
  leftX: 1,
  bottomY: 1,
  width: 1,
  height: 1,
};
const rec4 = {
  leftX: 5,
  bottomY: 5,
  width: 1,
  height: 1,
};
const rec5 = {
  leftX: 1,
  bottomY: 10,
  width: 10,
  height: 10,
};
const rec6 = {
  leftX: 2,
  bottomY: 2,
  width: 1,
  height: 1,
};
const rec7 = {
  leftX: 1,
  bottomY: 10,
  width: 10,
  height: 10,
};
const rec8 = {
  leftX: 1,
  bottomY: 11,
  width: 1,
  height: 1,
};

describe('findOverlap for overlapping', ()=> {
  it('should find overlap', () => {
    const testFunc = findOverlap(rec1, rec2);
    expect(testFunc).to.equal(true);
  });

  it('should not find overlap for non overlapping rectagles', () => {
    const testFunc = findOverlap(rec3, rec4);
    expect(testFunc).to.equal(false);
  });

  it('should find overlap for rectangles inside each other', () => {
    const testFunc = findOverlap(rec5, rec6);
    expect(testFunc).to.equal(true);
  });

  it('should not find overlap for rectangles sharing a border', () => {
    const testFunc = findOverlap(rec7, rec8);
    expect(testFunc).to.equal(false);
  });
});

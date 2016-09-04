const expect = require('chai').expect;
const should = require('chai').should();
const TempTracker = require('../7ClassTemperature.js');

describe('TempTracker Class', () => {
  beforeEach(() => {
    TempTrackerInstance = new TempTracker();
  });

  it('should be a class that can be instantiated', () => {
    expect(TempTrackerInstance).to.be.an.instanceOf(TempTracker);
  });

  it('should have methods', () => {
    ['insert', 'getMax', 'getMin', 'getMean', 'getMode'].forEach(item => {
      expect(TempTrackerInstance).respondTo(item);
    });
  });

  it('should insert values', () => {
    TempTrackerInstance.insert(8);
    expect(TempTrackerInstance.count).to.equal(1);
  });

  it('should calculate the mean', () => {
    TempTrackerInstance.insert(8);
    TempTrackerInstance.insert(9);
    expect(TempTrackerInstance.mean).to.equal(8.5);
  });

  it('should calculate the mode', () => {
    TempTrackerInstance.insert(8);
    expect(TempTrackerInstance.mode).to.deep.equal([8]);
    TempTrackerInstance.insert(9);
    expect(TempTrackerInstance.mode).to.deep.equal([8, 9]);
    TempTrackerInstance.getMode().length.should.equal(2);
    TempTrackerInstance.insert(8);
    expect(TempTrackerInstance.mode).to.deep.equal([8]);
  });

  it('should calculate the mean', () => {
    TempTrackerInstance.insert(2);
    expect(TempTrackerInstance.mean).to.equal(2);
    TempTrackerInstance.insert(10);
    expect(TempTrackerInstance.mean).to.equal(6);
  });

  it('it calculates the max', () => {
    TempTrackerInstance.insert(2);
    expect(TempTrackerInstance.max).to.equal(2);
    TempTrackerInstance.insert(10);
    expect(TempTrackerInstance.max).to.equal(10);
    TempTrackerInstance.insert(1);
    expect(TempTrackerInstance.max).to.equal(10);
  });
});

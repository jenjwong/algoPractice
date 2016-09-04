const expect = require('chai').expect;
const isBiTree = require('../9isBiTree.js');
const Tree = require('../binarySearchTreeClass.js');

describe('isBiTree', () => {

  beforeEach(()=>{
    tree = new Tree(8);
  });

  it('should return true for root with no children', () => {
    const testFunc = isBiTree(tree);
    expect(testFunc).to.equal(true);
  });

  it('should return true for a binarySearchTree', () => {
    tree.insert(10);
    tree.insert(11);
    tree.insert(12);
    tree.insert(13);
    tree.insert(14);

    const testFunc = isBiTree(tree);
    expect(testFunc).to.equal(true);
  });

  it('should return false for not a binarySearchTree', () => {
    const notBiSearchTree = { value: 8, left: {value: 100, left: null, right: null}, right: null }

    const testFunc = isBiTree(notBiSearchTree);
    expect(testFunc).to.equal(false);
  });

  it('should return false for not a binarySearchTree', () => {
    const notBiSearchTree = { value: 8, left: {value: 4, left: {value: 100, left: null, right: null}, right: null}, right: null }

    const testFunc = isBiTree(notBiSearchTree);
    expect(testFunc).to.equal(false);
  });
});

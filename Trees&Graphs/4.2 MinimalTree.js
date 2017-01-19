// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algo-
// rithm to create a binary search tree with minimal height.
// Hints: #19, #73, #176

// make Node class

// the middle value of the array is the root (so that tree can be balance and min height)

// using the same concept as binarySearch

// create a function called minBST that takes an ordered array, startIndex, endIndex
  // if the startIndex is greater than the endIndex you are out of the array
    // return null;
  // find the middle and make it the root value of node--(value, left, right)
  // set left child to minBST and pass in start and end indexes for left side of the array
  // set right child to minBST and pass in start and end indexes for right side of the array
  // (basically if you find the middle value and split the original array into two at the middle
  // you can traverse the array and split)
  // return the node

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const minBST = (arr, min, max) => {
  if (min > max) {
    return null;
  }
  const mid = Math.floor((min + max) / 2);

  const currentNode = new Node(arr[mid]);

  currentNode.left = minBST(arr, min, mid - 1);
  currentNode.right = minBST(arr, mid + 1, max);

  return currentNode;
};

const orderedArray = [1, 2, 3, 4, 5, 6, 7];
console.log(minBST(orderedArray, 0, orderedArray.length - 1));

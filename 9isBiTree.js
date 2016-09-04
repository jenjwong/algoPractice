'use strict';

class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(val) {
    this.storage.push(val);
    return this.storage.length;
  }

  dequeue() {
    return this.storage.shift();
  }
}

const isBiTree = tree => {
  const queue = new Queue();
  let node = tree;
  queue.enqueue(node);

  while(node = queue.dequeue()) {
    if (node.left) {
      if (node.left.value > node.value) {
        return false;
      } else {
        queue.enqueue(node.left);
      }
    }
    if (node.right) {
      if (node.right.value < node.value) {
        return false;
      } else {
        queue.enqueue(node.right);
      }
    }
  }
  return true;
};

module.exports = isBiTree;

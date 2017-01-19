// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
// Hints: #98, #114

// Input: integers
// Output: integers in fifo order
// constraints: queue with two Stacks
// edge-cases:
  // most of the edge-cases can be handled in the implementation of the stack class
  // this solution assumes batching moving items from the first stack to the second
    // items enter and are placed in the first stack. items can only be transfered to the second stack
    // when the second stack is empty; otherwise the add() function would have to move all items from
    // second stack to first, insert new value and the move from first to second stack again.
    // the current implementation allows add() to be constant instead of linear?

// create QueueViaStack class
  // in constructor define
    //  first stack
    // second stack

  // add () {
    // push into first stack
// }
  // shift() {
  // if there are items in secondStack
    // don't shift (you would have to shift back and forth on each QueueViaStack.add())
  // else while there are items in firstStack
    // enqueu items into secondStack
// }
  // peek() {
    // if there are values in the second stack
      // return the first value in second stack
    // else {
    //   call shift()
    //   and then return the first value in the second stack
    // }
// }

class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(val) {
    this.storage[this.count] = val;
    this.count += 1;
    return val;
  }

  remove() {
    if (this.count > 0) {
      this.count = this.count - 1;
      const removed = this.storage[this.count];
      delete this.storage[this.count];
      return removed;
    }
    return null;
  }

  peek() {
    if (this.count >= 0) {
      return this.storage[this.count - 1]
    }
    return null;
  }
}

// Test Cases for Stack
// const stacked = new Stack();
// const stacked = new Stack();
// stacked.push(888)
// stacked.push(999)
// console.log(stacked.storage)
// console.log(stacked.pop()) // 999
// console.log(stacked.pop())  // 888
// console.log(stacked.pop())  // -1

class QueueViaStack {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(val) {
    this.firstStack.push(val);
    return val;
  }

  shift() {
    if (this.secondStack.peek()) {
      return 'dequeue all values before calling shift';
    }
    while (this.firstStack.peek()) {
      const shifted = this.firstStack.remove();
      this.secondStack.push(shifted);
    }
    return 'shifted';
  }

  remove() {
    if (this.secondStack.peek()) {
      return this.secondStack.remove();
    }
    if (this.firstStack.peek()) {
      this.shift();
      return this.secondStack.remove();
    }
    return 'no more items to remove';
  }

  peek() {
    if (this.secondStack.peek()) {
      return this.secondStack.peek();
    }
    if (this.firstStack.peek()) {
      this.shift();
      return this.secondStack.peek();
    }
    return 'no more items to peek';
  }
}

const qVS = new QueueViaStack();
qVS.add(88);
qVS.add(99);
qVS.add(100);
qVS.add(101);
console.log(qVS.firstStack.storage, 'firstStack')
console.log(qVS.secondStack.storage, 'secondStack')
qVS.remove(); // 88
qVS.peek(); // 99
qVS.peek(); // 99

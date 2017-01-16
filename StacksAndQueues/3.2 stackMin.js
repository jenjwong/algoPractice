// Stack Max: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and max should all operate in 0(1) time.
// Hints: #27, #59, #78

// constant time constant space

// Input: numbers
// Output: numbers last in first out and min
//

class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.max = -Infinity;
  }

  push(val) {
    this.max = Math.max(this.max, val);
    this.storage[this.count] = [val, this.max];
    this.count += 1;
  }

  pop() {
    this.count -= 1;
    if (this.count >= 0) {
      const popped = this.storage[this.count];
      this.max = popped[1];
      delete this.storage[this.count];
      return popped;
    }
    return null;
  }

  min() {
    return this.storage[this.count - 1][1];
  }
}

const stacked = new Stack();
stacked.push(1);
stacked.push(7);
stacked.push(100);
stacked.push(8);
console.log(stacked.storage, 'storage');
console.log(stacked.min(), 'min');
console.log(stacked.pop(), 'popped');
console.log(stacked.pop(), 'popped');
console.log(stacked.storage, 'storage');
console.log(stacked.min(), 'min');

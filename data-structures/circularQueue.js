class CircularQueue {
  constructor(size) {
    this.storage = new Array(size);
    this.length = this.storage.length;
    this.enqueueCount = 0;
    this.cicularEnqueueIndex = this.findCircularIndex(this.enqueueCount);
    this.dequeueCount = 0;
    this.cicularDequeueIndex = this.findCircularIndex(this.dequeueCount);
  }

  findCircularIndex(num) {
    return num % this.length;
  }

  enqueue(val) {
    if (this.enqueueCount - this.dequeueCount >= this.length) {
      console.log(`array is full :(  call resize to make bigger`);
      return;
    }
    this.cicularEnqueueIndex = this.findCircularIndex(this.enqueueCount);
    this.storage[this.cicularEnqueueIndex] = val;
    this.enqueueCount ++;
    return this.storage;
  }

  dequeue() {
    this.circularDequeueIndex = this.findCircularIndex(this.dequeueCount);
    if (this.cicularDequeueIndex !== this.cicularEnqueueIndex + 1) {
      const dequeudVal = this.storage[this.circularDequeueIndex];
      this.storage[this.circularDequeueIndex] = undefined;
      this.dequeueCount ++;
      return dequeudVal;
    }
  }

  resize(size) {
    const numItemsInQueue = this.enqueueCount - this.dequeueCount;
    if (size >= numItemsInQueue) {
      const resizedArray = new Array(size);
      for (var i = 0; i < numItemsInQueue; i++) {
        const val = this.dequeue();
        resizedArray[i] = val;
      }
      this.storage = resizedArray;
      this.length = size;
      this.enqueueCount = numItemsInQueue;
      this.dequeueCount = 0;
    }
    return this.storage;
  }
}

const circQueue = new CircularQueue(3);
circQueue.enqueue('a');
circQueue.enqueue('b');
circQueue.enqueue('c');
circQueue.enqueue('d'); // array is full error message
console.log(circQueue.dequeue()); // a
console.log(circQueue.dequeue()); // b
circQueue.enqueue('f');
circQueue.enqueue('g');
circQueue.enqueue('h'); //array is full error message
console.log(circQueue.storage) //['f', 'g', 'c']
circQueue.resize(5);
console.log('resized', circQueue.storage, circQueue.storage.length) //['c', 'f', 'g', ...]
console.log(circQueue.enqueue('i')) // ['c', 'f', 'g', 'i', ...]
console.log(circQueue.enqueue('j')) // ['c', 'f', 'g', 'i', 'j', ...]
console.log(circQueue.enqueue('k')) // array is full error message
console.log(circQueue.dequeue())
console.log(circQueue.dequeue())
console.log(circQueue.resize(6))
console.log('resized', circQueue.storage, circQueue.storage.length) //['c', 'f', 'g', ...]
console.log(circQueue.dequeue())
circQueue.enqueue('l')
circQueue.enqueue('m')
circQueue.enqueue('o')
circQueue.enqueue('p') //error
console.log(circQueue.storage)

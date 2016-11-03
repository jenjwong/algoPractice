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

const circArray = new CircularArray(3);
circArray.enqueue('a');
circArray.enqueue('b');
circArray.enqueue('c');
circArray.enqueue('d'); // array is full error message
console.log(circArray.dequeue()); // a
console.log(circArray.dequeue()); // b
circArray.enqueue('f');
circArray.enqueue('g');
circArray.enqueue('h'); //array is full error message
console.log(circArray.storage) //['f', 'g', 'c']
circArray.resize(5);
console.log('resized', circArray.storage, circArray.storage.length) //['c', 'f', 'g', ...]
console.log(circArray.enqueue('i')) // ['c', 'f', 'g', 'i', ...]
console.log(circArray.enqueue('j')) // ['c', 'f', 'g', 'i', 'j', ...]
console.log(circArray.enqueue('k')) // array is full error message
console.log(circArray.dequeue())
console.log(circArray.dequeue())
console.log(circArray.resize(6))
console.log('resized', circArray.storage, circArray.storage.length) //['c', 'f', 'g', ...]
console.log(circArray.dequeue())
circArray.enqueue('l')
circArray.enqueue('m')
circArray.enqueue('o')
circArray.enqueue('p') //error
console.log(circArray.storage)

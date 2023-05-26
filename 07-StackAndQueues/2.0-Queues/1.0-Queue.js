class SLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //   Enqueue
  // Adding to the beginning of the Queue!
  // Remember, queues are a FIFO data structure

  //   This function accepts some value
  // Create a new node using that value passed to the function
  // If there are no nodes in the queue, set this node to be the first and last property of the queue
  // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
  // Increment the size of the queue by 1
  enqueue(value) {
    var newNode = new SLNode(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //   Dequeue
  // Removing from the beginning of the Queue!
  // Remember, queues are a FIFO data structure

  // Dequeue pseudocode
  // If there is no first property, just return null
  // Store the first property in a variable
  // See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
  // If there is more than 1 node, set the first property to be the next property of first
  // Decrement the size by 1
  // Return the value of the node dequeued

  dequeue() {
    if (!this.first) return null;
    var oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst.val;
  }
}

var slQueue = new SLQueue();
console.log(slQueue.enqueue("First"));
console.log(slQueue.enqueue("Second"));
console.log(slQueue.enqueue("Third"));
console.log(slQueue);
console.log(slQueue.dequeue())
console.log(slQueue.dequeue())
console.log(slQueue.dequeue())
console.log(slQueue.dequeue())
console.log(slQueue.size)

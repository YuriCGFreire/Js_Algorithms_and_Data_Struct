class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Create a new node with the value passed to the function
  // If the head property is null set the head and tail to be the newly created node
  // If not, set the next property on the tail to be that node
  // Set the previous property on the newly created node to be the tail
  // Set the tail to be the newly created node
  // Increment the length
  // Return the Doubly Linked List
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    // incremento o length e retorno a lista
    this.length++;
    return this;
  }

  // If there is no head, return undefined
  // Store the current tail in a variable to return later
  // If the length is 1, set the head and tail to be null
  // Update the tail to be the previous Node.
  // Set the newTail's next to null
  // Decrement the length
  // Return the value removed
  pop() {
    if (!this.head) {
      return undefined;
    }
    var oldTail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  // SHIFTING
  // Removing a node from the beginning of the Doubly Linked List
  // If length is 0, return undefined
  // Store the current head property in a variable (we'll call it old head)
  // If the length is one
  // set the head to be null
  // set the tail to be null
  // Update the head to be the next of the old head
  // Set the head's prev property to null
  // Set the old head's next to null
  // Decrement the length
  // Return old head
  shift() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    var oldHead = this.head;
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  //     UNSHIFTING
  // Adding a node to the beginning of the Doubly Linked List

  // Create a new node with the value passed to the function
  // If the length is 0
  // Set the head to be the new node
  // Set the tail to be the new node
  // Otherwise
  // Set the prev property on the head of the list to be the new node
  // Set the next property on the new node to be the head property
  // Update the head to be the new node
  // Increment the length
  // Return the list
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // GET
  // Accessing a node in a Doubly Linked List by its position
  // If the index is less than 0 or greater or equal to the length, return null
  // If the index is less than or equal to half the length of the list
  // Loop through the list starting from the head and loop towards the middle
  // Return the node once it is found
  // If the index is greater than half the length of the list
  // ​Loop through the list starting from the tail and loop towards the middle
  // Return the node once it is found
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var current, counter;
    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter < index) {
        current = current.next;
        counter++;
      }
    } else if (index > this.length / 2) {
      current = this.tail;
      counter = this.length - 1;
      while (counter > index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  // SET
  // Replacing the value of a node to the in a Doubly Linked List

  // Set pseudocode
  // Create a variable which is the result of the get method at the index passed to the function
  // If the get method returns a valid node, set the value of that node to be the value passed to the function
  // Return true
  // Otherwise, return false
  set(index, value) {
    var node = this.get(index);
    if (node == null) {
      return false;
    }
    node.val = value;
    return true;
  }

  // INSERT
  // Adding a node in a Doubly Linked List by a certain position

  // Insert pseudocode
  // If the index is less than zero or greater than or equal to the length return false
  // If the index is 0, unshift
  // If the index is the same as the length, push
  // Use the get method to access the index -1
  // Set the next and prev properties on the correct nodes to link everything together
  // Increment the length
  // Return true
  insert(index, value) {
    var newNode, prevNode;
    if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.length) {
      return !!this.push(value);
    } else if (index < 0 || index > this.length) {
      return false;
    }
    newNode = new Node(value);
    prevNode = this.get(index - 1);
    newNode.prev = prevNode;
    newNode.next = prevNode.next;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  //   REMOVE
  //   Removing a node in a Doubly Linked List by a certain position

  // Remove pseudocode
  // If the index is less than zero or greater than or equal to the length return undefined
  // If the index is 0, shift
  // If the index is the same as the length-1, pop
  // Use the get method to retrieve the item to be removed
  // Update the next and prev properties to remove the found node from the list
  // Set next and prev to null on the found node
  // Decrement the length
  // Return the removed node.

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop(index);
    var removedNode = this.get(index);
    var prevNode = removedNode.prev;
    var nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
var list = new DoublyLinkedList();
// list.push("Ola")
// list.push("Mundo")
// list.push("!")
// console.log(list.unshift(3))
// list.pop()
// // list.pop()
// console.log(list)
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
// console.log(list.set(7, "World"))
// console.log(list.set(3, "Hello"))
// console.log(list.set(13, "Hello"))
console.log(list.insert(3, "Teste"));
console.log("Before remove: ", list.length)
console.log("Removed node: ", list.remove(-1))
console.log("Index last item: ", list.get(-1));
console.log("After remove: ", list.length)
// console.log(list.insert(0, "Teste"))

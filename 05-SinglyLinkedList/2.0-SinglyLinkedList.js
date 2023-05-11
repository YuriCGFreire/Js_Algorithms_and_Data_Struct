// A node contains a piece of data - val
// And a reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// A linked list has a pointer to the head of the list, a pointer to the tail
// and a length
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Pushing pseudocode
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // Increment the length by one
  // Return the linked list
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Uma forma de "andar" pelos itens da lista
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  // Popping pseudocode
  // If there are no nodes in the list, return undefined
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to last node to be null
  // Set the tail to be the 2nd to last node
  // Decrement the length of the list by 1
  // Return the value of the node removed
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  // If there are no nodes, return undefined
  // Store the current head property in a variable
  // Set the head property to be the current head's next property
  // Decrement the length by 1
  // Return the value of the node removed
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the newly created node's next property to be the current head property on the list
  // Set the head property on the list to be that newly created node
  // Increment the length of the list by 1
  // Return the linked list
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return list;
  }

  // This function should accept an index
  // If the index is less than zero or greater than or equal to the length of the list, return null
  // Loop through the list until you reach the index and return the node at that specific index
  get(val) {
    if (val < 0 || val > this.length) return null;
    var counter = 0;
    var current = this.head;
    // Vou percorrer a lista enquanto val != de counter
    while (val !== counter) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // This function should accept a value and an index
  // Use your get function to find the specific node.
  // If the node is not found, return false
  // If the node is found, set the value of that node to be the value passed to the function and return true
  set(index, val) {
    var foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

// If the index is less than zero or greater than the length, return false
// If the index is the same as the length, push a new node to the end of the list
// If the index is 0, unshift a new node to the start of the list
// Otherwise, using the get method, access the node at the index - 1
// Set the next property on that node to be the new node
// Set the next property on the new node to be the previous next
// Increment the length
// Return true
  insert(index, value){
    if(index < 0 || index > this.length){
      return false
    }else if(index == this.length){
      this.push(value)
    }else if(index == 0){
      this.unshift(value)
    }
    var newNode = new Node(value)
    var previousNode = this.get(index - 1)
    var temp = previousNode.next
    previousNode.next = newNode
    newNode.next = temp
    this.length++
    return true
  }


// If the index is less than zero or greater than the length, return undefined
// If the index is the same as the length-1, pop
// If the index is 0, shift
// Otherwise, using the get method, access the node at the index - 1
// Set the next property on that node to be the next of the next node
// Decrement the length
// Return the value of the node removed
  remove(index){
    if(index < 0 || index > this.length) return undefined;
    if(index === 0){
      this.shift(index)
    }else if(index === this.length){
      this.pop(index)
    }
    var previousNode = this.get(index - 1)
    var nodeToBeRemoved = previousNode.next
    previousNode.next = nodeToBeRemoved.next
    this.length--
    return nodeToBeRemoved.val
  }

// Swap the head and tail
// Create a variable called next
// Create a variable called prev
// Create a variable called node and initialize it to the head property
// Loop through the list
// Set next to be the next property on whatever node is
// Set the next property on the node to be whatever prev is
// Set prev to be the value of the node variable
// Set the node variable to be the value of the next variable
// Once you have finished looping, return the list
  reverse(){
    var node = this.head
    this.head = this.tail
    this.tail = node
    var next;
    var prev = null;
    for(let i = 0; i < this.length; i++){
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}

let list = new SinglyLinkedList();
// list.push("Hello");
// list.push("World");
// list.push("!");
// list.push("2");
// list.push("3");
// console.log(list)
// console.log("Antes do pop: ")
// console.log(list.traverse())
// console.log("popping!")
// console.log(list.pop());
// console.log("Depois do pop")
// console.log(list.traverse())

// console.log("Antes do shift: ")
// console.log("list: ",list)
// console.log("shifting!")
// console.log("Shift >>>",list.shift());
// console.log("Depois do shift")
// console.log("list: ",list)
// console.log(list)
// console.log(list.unshift("Hello"))
// console.log(list.unshift("Hy"))
// console.log(list.unshift("!"))
// console.log(list.push("!"))
// list.traverse()
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
// console.log(list.get(8))
// primeiro parametro é o index e o segundo o valor a ser setado no node
// console.log(list.set(3, "Setado!"));
// console.log(list.get(3));
// console.log(list.insert(3, 3.5))
// console.log(list.get(2))
// console.log(list.get(3))
// console.log(list.remove(3))
// console.log(list.get(3))
// console.log(list.traverse())
console.log(list.traverse())
list.reverse()
console.log(list.traverse())

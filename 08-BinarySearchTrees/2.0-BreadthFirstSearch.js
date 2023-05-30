class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currentNode, newNode) {
    if (currentNode.value < newNode.value) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    } else {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    }
  }

  // Create a queue(this can be an array) and a variable to store the values of nodes visited
  // place the root node in the queue
  // Loop as long as there is anything in the queue
  //  Dequeue a node from the queue and push the value of the node
  //  into the variable that stores the nodes
  //  If there is a left property on the node dequeued - add it to the queue
  //  If there is a right property on the node dequeued - add it to the queue
  //  Return the variable that stores the values
  breadthFirstSearch() {
    // Essa variavel precisa ser uma fila
    var queue = [];
    // Variavel que vai contar as variaveis ja visitadas
    var visited = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      // Retiro o primeiro elemento da queue
      var currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }
}

var binaryTree = new BinarySearchTree();
binaryTree.insert(20);
binaryTree.insert(14);
binaryTree.insert(57);
binaryTree.insert(9);
binaryTree.insert(19);
binaryTree.insert(31);
binaryTree.insert(62);
binaryTree.insert(3);
binaryTree.insert(11);
binaryTree.insert(72);
console.log(binaryTree.breadthFirstSearch());

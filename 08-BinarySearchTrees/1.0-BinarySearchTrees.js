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

  //     INSERTING A NODE
  // Steps - Iteratively or Recursively

  // Create a new node
  // Starting at the root
  // Check if there is a root, if not - the root now becomes that new node!
  // If there is a root, check if the value of the new node is greater than or less than the value of the root
  // If it is greater
  // Check to see if there is a node to the right
  // If there is, move to that node and repeat these steps
  // If there is not, add that node as the right property
  // If it is less
  // Check to see if there is a node to the left
  // If there is, move to that node and repeat these steps
  // If there is not, add that node as the left property

  // Iterative aproach
  iterativeInsert(value) {
    var newNode = new Node(value);
    // verificar se existe valor na root, se não eu atribuo o valor da root para ser o novo node
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      // Criar variavel que vai ser current e irá iniciar na root
      var current = this.root;
      // Repetir o codigo abaixo enquanto tiver current
      while (current) {
        if (current.value > newNode.value) {
          if (current.left !== null) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else {
          if (current.right !== null) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        }
      }
    }
  }

  //     Starting at the root
  // Check if there is a root, if not - we're done searching!
  // If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  // If not, check to see if the value is greater than or less than the value of the root
  // If it is greater
  // Check to see if there is a node to the right
  // If there is, move to that node and repeat these steps
  // If there is not, we're done searching!
  // If it is less
  // Check to see if there is a node to the left
  // If there is, move to that node and repeat these steps
  // If there is not, we're done searching!
  iterativeFind(value) {
    if (this.root === null) return undefined;
    // criar variavel current
    var current = this.root;
    // Enquanto current for diferente de null repito o codigo abaixo
    while (current !== null) {
      // Se o valor for igual o valor do current eu retorno o current
      if (value === current.value) return current;
      // Se o valor for menor, eu passo o left do current para o ser o proximo current
      if (value < current.value) {
        current = current.left;
        //Se for maior eu passo o right do current atual para ser o current
      } else if (value > current.value) {
        current = current.right;
      }
    }
    // Saiu do while sem resultado eu retorno undefined
    return undefined;
  }

  // Recursion aproach
  recursionInsert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.recursionInsertNode(this.root, newNode);
    }
    return "ok"
  }

  recursionInsertNode(currentNode, newNode) {
    if (currentNode.value > newNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.recursionInsertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.recursionInsertNode(currentNode.right, newNode);
      }
    }
  }
}

var binaryTree = new BinarySearchTree();
// binaryTree.iterativeInsert(10);
// binaryTree.iterativeInsert(9);
// binaryTree.iterativeInsert(8);
// binaryTree.iterativeInsert(18);
// binaryTree.iterativeInsert(12);
// binaryTree.iterativeInsert(20);
// binaryTree.iterativeInsert(9.5);
// binaryTree.iterativeInsert(19);
// binaryTree.iterativeInsert(21);

binaryTree.recursionInsert(10)
binaryTree.recursionInsert(9)
binaryTree.recursionInsert(8)
binaryTree.recursionInsert(18)
binaryTree.recursionInsert(12)
binaryTree.recursionInsert(20)
binaryTree.recursionInsert(9.5)
console.log(binaryTree.recursionInsert(11));

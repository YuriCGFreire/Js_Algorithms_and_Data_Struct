class BTNode {
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
  // Crio um node com o valor passado
  // se a arvore nao tiver uma raiz, eu faço esse node ser a raiz
  // se não eu verifico se o valor desse node novo é maior ou menor que o valor da raiz
  // se for menor eu verifico se tem algum valor na esquerda, se tiver, eu "pulo" para aquele elemento
  // se não tiver, eu faço o novo node ser o o left da raiz
  // sigo a mesma para caso o valor seja maior
  iterativeInsert(value) {
    var newNode = new BTNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      var current = this.root;
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

  //Eu vou primeiro verificar sa arvore esta vazia, se estiver eu retorno null
  //Caso não esteja eu comparo o valor passado com o valor da raiz da arvore
  //Se for menor eu verifico os valores na esquerda, se maior eu verifico os da direita
  //Verifico se tem valores na esquerda ou na direita, se nao tiver eu retorno undefined,
  //Do contrario eu continuo procurando e comparando
  iterativeFind(value) {
    if (this.root === null) return null;
    var current = this.root;
    while (current !== null) {
      if (current.value === value) return current;
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      }
    }
    return undefined;
  }

  recursiveInsert(value) {
    var newNode = new BTNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      this.recursiveInsertNode(this.root, newNode);
    }
  }

  recursiveInsertNode(currentNode, node) {
    if (currentNode.value > node.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
      } else {
        return this.recursiveInsertNode(currentNode.left, node);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = node;
      } else {
        return this.recursiveInsertNode(currentNode.right, node);
      }
    }
  }

  recursiveFind(value) {
    if (!this.root) return undefined;
    if (value === this.root.value) {
      return this.root;
    }
    function recursiveFindNode(currentNode, value) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (currentNode.value > value && currentNode.left !== null) {
        return recursiveFindNode(currentNode.left, value);
      } else if (currentNode.value < value && currentNode.right !== null) {
        return recursiveFindNode(currentNode.right, value);
      }
    }
    return recursiveFindNode(this.root, value)
  }

  breadthFirstSearch(){
    const queue = []
    const visited = []
    queue.push(this.root)
    while(queue.length){
      var currentNode = queue.shift()
      visited.push(currentNode.value)
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return visited
  }

  depthFirstSearchPreOrder(){
    const visited = []
    function DFSTraverse(currentNode){
      visited.push(currentNode.value)
      if(currentNode.left)DFSTraverse(currentNode.left)
      if(currentNode.right)DFSTraverse(currentNode.right)
    }
    DFSTraverse(this.root)
    return visited
  }

  depthFirstSearchInOrder(){
    const visited = []
    function DFSTraverse(node){
      if(node.left)DFSTraverse(node.left)
      visited.push(node.value)
      if(node.right)DFSTraverse(node.right)
    }
    DFSTraverse(this.root)
    return visited
  }

  depthFirstSearchPostOrder(){
    const visited = []
    function DFSTraverse(node){
      if(node.left)DFSTraverse(node.left)
      if(node.right)DFSTraverse(node.right)
      visited.push(node.value)
    }
    DFSTraverse(this.root)
    return visited
  }
}

const tree = new BinarySearchTree();
// tree.iterativeInsert(10);
// tree.iterativeInsert(9);
// tree.iterativeInsert(8);
// tree.iterativeInsert(18);
// tree.iterativeInsert(12);
// tree.iterativeInsert(20);
// tree.iterativeInsert(9.5);
// tree.iterativeInsert(19);
// tree.iterativeInsert(21);
tree.recursiveInsert(5)
tree.recursiveInsert(2)
tree.recursiveInsert(7)
tree.recursiveInsert(1)
tree.recursiveInsert(3)
tree.recursiveInsert(6)
tree.recursiveInsert(8)
console.log(tree.depthFirstSearchPostOrder());

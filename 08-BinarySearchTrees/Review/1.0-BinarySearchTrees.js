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

  // Função para inserir um valor na arvore
  insert(value) {
    // Primeiro eu crio um node a partir de value
    var newNode = new Node(value);
    // Se não tiver root eu insiro o valor na raiz da arvore, pois indica que a arvore está vazia
    if (!this.root) {
      this.root = newNode;
      // Caso tenha uma raiz eu chamo uma função recursiva, que vai verificar se o valor é menor ou maior que
      // o no atual
    } else {
      // Essa função vai receber um no atual, que começa com a raiz e um no a ser inserido
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currentNode, node) {
    // Começo comparando se o valor de currentNode é menor que o valor de node
    if (currentNode.value < node.value) {
      // Se for menor que o value de node, significa que eu preciso jogar o valor de node pra direta
      // Mas apenas se o right de currentNode for null
      if (currentNode.right === null) {
        currentNode.right = node;
        // Se nao for null, eu chamo insertNode, passsando o node da direita (como currentNode) e o node como
        // o node a ser inserido
      } else {
        this.insertNode(currentNode.right, node);
      }
      // Se o valor de node for menor que o valor de currentNode ele cai no else, pra inserir no lado esquerdo
    } else {
      if (currentNode.left === null) {
        currentNode.left = node;
      } else {
        this.insertNode(currentNode.left, node);
      }
    }
  }

  // Vou seguir a ideia do insert, mas eu vou retornar o valor encontrado
  // quando encontrar ele, se não encontrar eu passo o valor da esquerda ou direita
  // caso o valor seja menor ou maior que o currentNode
  find(value) {
    var foundValue = undefined;
    function traverse(node) {
      if (node === null) return;
      if (value === node.value) {
        return (foundValue = node);
      }
      if (value > node.value) {
        traverse(node.right);
      } else if (value < node.value) {
        traverse(node.left);
      }
      return;
    }
    traverse(this.root);
    return foundValue;
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
    var visitedNodes = []
    function DFSTraverse(node){
        visitedNodes.push(node.value)
        if(node.left) DFSTraverse(node.left)
        if(node.right) DFSTraverse(node.right)
    }
    DFSTraverse(this.root)
    return visitedNodes
  }

  depthFirstSearchPostOrder(){
    var visitedNodes = []
    function DFSTraverse(node){
        if(node.left) DFSTraverse(node.left)
        if(node.right) DFSTraverse(node.right)
        visitedNodes.push(node.value)
    }
    DFSTraverse(this.root)
    return visitedNodes
  }

  depthFirstSearchInOrder(){
    var visitedNodes = []
    function DFSTraverse(node){
        if(node.left) DFSTraverse(node.left)
        visitedNodes.push(node.value)
        if(node.right) DFSTraverse(node.right)
    }
    DFSTraverse(this.root)
    return visitedNodes
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

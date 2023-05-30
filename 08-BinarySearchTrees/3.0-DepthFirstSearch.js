class Node{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(currentNode, newNode){
        if(currentNode.value < newNode.value){
            if(currentNode.right === null){
                currentNode.right = newNode
            }else{
                this.insertNode(currentNode.right, newNode)
            }
        }else{
            if(currentNode.left === null){
                currentNode.left = newNode
            }else{
                this.insertNode(currentNode.left, newNode)
            }
        }
    }

    breadthFirstSearch(){
        // criar uma variavel onde vai conter os elementos a serem visitados
        // onde eu vou inserir os nodes
        var queue = [];
        // E uma variavel dos eleementos ja visitados, mas vou inserir apenas o valor dos nodes
        var visited = [];
        // Preciso inserir o root no queue
        queue.push(this.root)
        // percorrer o codigo abaixo enquanto tiver valor em queue 
        while(queue.length !== 0){
            // uma variavel para o node atual que eu vou tirar de queue
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

    // DFS -  PreOrder
    // Steps - Recursively
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current 
    // Write a helper function wich accepts a node 
        // Push the value of the node to the variable that stores the values 
        // if the node has a left property, call the helper function with the 
        // the left property on the node 
        // if the node has a right property, call the helper function with the 
        // the right property on the node 
    // Invoke the helper function with the current variable 
    // return the array of values
    depthFirstSearchPreOrder(){
        var visited = []
        function DFSTraverse(node){
            visited.push(node.value)
            if(node.left)DFSTraverse(node.left)
            if(node.right) DFSTraverse(node.right)
        }
        DFSTraverse(this.root)
        return visited
    }

    // DFS - PostOrder
    depthFirstSearchPostOrder(){
        var visited = []
        function DFSTraverse(node){
            if(node.left)DFSTraverse(node.left)
            if(node.right) DFSTraverse(node.right)
            visited.push(node.value)
        }
        DFSTraverse(this.root)
        return visited
    }

    // DFS - InOrder
    depthFirstSearchInOrder(){
        var visited = []
        function DFSTraverse(node){
            if(node.left)DFSTraverse(node.left)
            visited.push(node.value)
            if(node.right) DFSTraverse(node.right)
        }
        DFSTraverse(this.root)
        return visited
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
console.log("Pre Order: ", binaryTree.depthFirstSearchPreOrder());
console.log("Post Order: ", binaryTree.depthFirstSearchPostOrder());
console.log("In Order: ", binaryTree.depthFirstSearchInOrder());
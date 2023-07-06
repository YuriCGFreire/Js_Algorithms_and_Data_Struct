// Criar priorityQueue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(data, priority) {
    const newNode = new Node(data, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].priority >= this.values[parentIndex].priority) {
        break;
      }
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
    }
    return this;
  }

  dequeue() {
    let oldRoot = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    let index = 0;
    while (index <= this.values.length - 1) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      if (!this.values[leftChildIndex] || !this.values[rightChildIndex]) break;
      let highestPriorityChildIndex =
        this.values[leftChildIndex].priority <
        this.values[rightChildIndex].priority
          ? leftChildIndex
          : rightChildIndex;
      if (
        highestPriorityChildIndex > this.values.length ||
        (this.values[index].priority <= this.values[leftChildIndex].priority &&
          this.values[index].priority <= this.values[rightChildIndex].priority)
      ) {
        break;
      }
      var temp = this.values[index];
      this.values[index] = this.values[highestPriorityChildIndex];
      this.values[highestPriorityChildIndex] = temp;
      index = highestPriorityChildIndex;
    }
    return oldRoot;
  }
}

// Criar grafo
class Graph {
  constructor(vertices) {
    this.nodes = [];
    this.vertices = vertices;
    this.adjacencyMatrix = Array.from(Array(vertices), () =>
      new Array(vertices).fill(0)
    );
  }

  printAdjacencyMatrix() {
    let colum = "   ";
    for (let n = 0; n < this.nodes.length; n++) {
      colum += this.nodes[n] + "  ";
    }
    console.log(colum);
    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      let row = " ";
      for (let j = 0; j < this.adjacencyMatrix[i].length; j++) {
        row += this.adjacencyMatrix[i][j] + "  ";
      }
      console.log(this.nodes[i] + " " + row);
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (vertex1 > this.vertices - 1 || vertex2 > this.vertices - 1) {
      console.log("Invalid vertex");
    } else if (vertex1 === vertex2) {
      console.log("Same vertex");
    } else {
      this.adjacencyMatrix[vertex1][vertex2] = weight;
      this.adjacencyMatrix[vertex2][vertex1] = weight;
    }
  }

  addNode(node) {
    this.nodes.push(node);
  }

  dijkstra(start, end) {
    const distances = new Array(this.vertices).fill(Infinity);
    distances[start] = 0;
    const priorityQueue = new PriorityQueue();
    const path = []
    for (let i = 0; i < this.adjacencyMatrix.length - 1; i++) {
      if (i === start) {
        priorityQueue.enqueue(i, 0);
      } else {
        priorityQueue.enqueue(i, Infinity);
      }
    }
    let smallest;
    const previous = new Array(this.vertices).fill(null);
    while (priorityQueue.values.length) {
      smallest = priorityQueue.dequeue().val;
      if(smallest === end){
        while(previous[smallest]>=0){
          path.push(this.nodes[smallest])
          smallest = previous[smallest]
        }
        break
      }
      if(smallest || distances[smallest] != Infinity){
        for(let neighbor = 0; neighbor < this.adjacencyMatrix[smallest].length; neighbor++){
          let weight = this.adjacencyMatrix[smallest][neighbor]
          if(weight != 0){
            let calcDistance = weight + distances[smallest]
            if(calcDistance < distances[neighbor]){
              distances[neighbor] = calcDistance
              previous[neighbor] = smallest
              priorityQueue.enqueue(neighbor, calcDistance)
            }
          }
        }
      }
    }
    return path.reverse()
    
  }
}

const newGraph = new Graph(6);

newGraph.addNode("A");
newGraph.addNode("B");
newGraph.addNode("C");
newGraph.addNode("D");
newGraph.addNode("E");
newGraph.addNode("F");
newGraph.addEdge(0, 1, 4);
newGraph.addEdge(0, 2, 2);
newGraph.addEdge(1, 4, 3);
newGraph.addEdge(5, 4, 1);
newGraph.addEdge(3, 4, 3);
newGraph.addEdge(5, 3, 1);
newGraph.addEdge(3, 2, 2);

console.log(newGraph.printAdjacencyMatrix())

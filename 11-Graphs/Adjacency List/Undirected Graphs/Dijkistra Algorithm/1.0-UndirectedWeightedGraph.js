class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
    return this;
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(startVertex, endVertex) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};
    const path = []
    let smallest;
    Object.keys(this.adjacencyList).forEach((vertex) => {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    });
    while (priorityQueue.values.length) {
      smallest = priorityQueue.dequeue().val;
      if (smallest === endVertex) {
        while(previous[smallest]){
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if(smallest || distances[smallest] != Infinity){
        this.adjacencyList[smallest].forEach((neighboor) => {
          let calcDistance = neighboor.weight + distances[smallest];
          if (calcDistance < distances[neighboor.node]) {
            distances[neighboor.node] = calcDistance;
            previous[neighboor.node] = smallest;
            priorityQueue.enqueue(neighboor.node, calcDistance);
          }
        });
      }
    }
    return path.concat(startVertex).reverse()
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B"); 
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("F", "E", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("F", "D", 1);
graph.addEdge("F", "C", 4);
graph.addEdge("D", "C", 2);

// console.log(graph.adjacencyList)

console.log("Adjacency List")
console.log(graph.dijkstra("B", "F"))

//       9
//    A <-> B
//   5 \   / 7
//       C

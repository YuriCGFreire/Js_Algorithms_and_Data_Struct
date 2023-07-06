class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
    return this;
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => this.removeEdge(vertex, v));
      delete this.adjacencyList[vertex];
    }
  }

  // The function should accept a starting node
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited vertices
  // Create a helper function which accepts a vertex
  // The helper function should return early if the vertex is empty
  // The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
  // Loop over all of the values in the adjacencyList for that vertex
  // If any of those values have not been visited, recursively invoke the helper function with that vertex
  // Invoke the helper function with the starting vertex
  // Return the result array
  recursiveDepthFirstTraversal(startingVertex) {
    const resultArray = [];
    const visitedVertexs = {};
    const adjacencyList = this.adjacencyList;
    function helperDFS(vertex) {
      if (!vertex) return null;
      visitedVertexs[vertex] = true;
      resultArray.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        if (!visitedVertexs[v]) {
          return helperDFS(v);
        }
      });
    }
    helperDFS(startingVertex);
    return resultArray;
  }

  // The function should accept a starting node
  // Create a stack to help use keep track of vertices (use a list/array)
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited vertices
  // Add the starting vertex to the stack, and mark it visited
  // While the stack has something in it:
  // Pop the next vertex from the stack
  // If that vertex hasn't been visited yet:
  // ​Mark it as visited
  // Add it to the result list
  // Push all of its neighbors into the stack
  // Return the result array
  iterativeDepthFirstTraversal(startingVertex) {
    const stackVertex = [];
    const resultArray = [];
    const visitedVertex = {};
    stackVertex.push(startingVertex);
    visitedVertex[startingVertex] = true;
    while (stackVertex.length) {
      let shiftedVertex = stackVertex.shift();
      resultArray.push(shiftedVertex);
      this.adjacencyList[shiftedVertex].forEach((v) => {
        if (!visitedVertex[v]) {
          visitedVertex[v] = true;
          stackVertex.push(v);
        }
      });
    }
    return resultArray;
  }

  breadthFirstTraversal(startingVertex) {
    const queueVertices = [];
    const resultArray = [];
    const visitedVertices = {};
    queueVertices.push(startingVertex);
    visitedVertices[startingVertex] = true;
    while (queueVertices.length) {
      let shiftedVertex = queueVertices.shift();
      resultArray.push(shiftedVertex);
      this.adjacencyList[shiftedVertex].forEach((v) => {
        if (!visitedVertices[v]) {
          visitedVertices[v] = true;
          queueVertices.push(v);
        }
      });
    }
    return resultArray;
  }
}

const newGraph = new UndirectedGraph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");
newGraph.addEdge("A", "B");
newGraph.addEdge("A", "C");
newGraph.addEdge("B", "D");
newGraph.addEdge("C", "E");
newGraph.addEdge("D", "E");
newGraph.addEdge("D", "F");
newGraph.addEdge("E", "F");
console.log(newGraph);
console.log(newGraph.breadthFirstTraversal("B"));

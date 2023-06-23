class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencyMatrix = Array.from(Array(vertices), () =>
      new Array(vertices).fill(0)
    );
  }

  addEdge(vertex1, vertex2) {
    if (vertex1 > this.vertices - 1 || vertex2 > this.vertices - 1) {
      console.log("Invalid vertex");
    } else if (vertex1 === vertex2) {
      console.log("Same vertex");
    } else {
      this.adjacencyMatrix[vertex1][vertex2] = 1;
      this.adjacencyMatrix[vertex2][vertex1] = 1;
    }
  }

  removeEdge(vertex1, vertex2) {
    if (vertex1 > this.vertices - 1 || vertex2 > this.vertices - 1) {
      console.log("Invalid vertex");
    } else if (vertex1 === vertex2) {
      console.log("Same vertex");
    } else {
      this.adjacencyMatrix[vertex1][vertex2] = 0;
      this.adjacencyMatrix[vertex2][vertex1] = 0;
    }
  }

  addVertex() {
    this.vertices++;
    this.adjacencyMatrix.push([]);
    for (let i = 0; i < this.vertices; i++) {
      this.adjacencyMatrix[i][this.vertices - 1] = 0;
      this.adjacencyMatrix[this.vertices - 1][i] = 0;
    }
  }

  removeVertex(vertex) {
    if (vertex < 0 || vertex > this.vertices - 1) {
      console.log("Invalid Vertex");
    } else {
      while (vertex < this.vertices - 1) {
        if (vertex < this.vertices - 1) {
          for (let i = 0; i < this.vertices; i++) {
            this.adjacencyMatrix[i][vertex] =
              this.adjacencyMatrix[i][vertex + 1];
          }
          for (let i = 0; i < this.vertices; i++) {
            this.adjacencyMatrix[vertex][i] =
              this.adjacencyMatrix[vertex + 1][i];
          }
          vertex++;
        } else {
          break;
        }
      }
      for (let i = 0; i < this.vertices; i++) {
        this.adjacencyMatrix[i].pop();
      }
      this.adjacencyMatrix.pop();
      this.vertices--;
    }
  }

  printGraph() {
    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      let row = "";
      for (let j = 0; j < this.adjacencyMatrix[i].length; j++) {
        row += this.adjacencyMatrix[i][j] + " ";
      }
      console.log(row);
    }
  }

  depthFirstTraversal(vertex) {
    const visitedVerticesArray = new Array(this.vertices).fill(false);
    const result = [];
    const adj = this.adjacencyMatrix;
    const vertices = this.vertices;
    function helperDFS(current, visited) {
      visitedVerticesArray[current] = true;
      result.push(current);
      for (let i = 0; i < vertices; i++) {
        if (adj[current][i] === 1 && !visited[i]) {
          helperDFS(i, visited);
        }
      }
    }
    helperDFS(vertex, visitedVerticesArray);
    return result;
  }

  recursiveBFS(vertex) {
    const visitedVerticesArray = new Array(this.vertices).fill(false);
    const result = [];
    const adj = this.adjacencyMatrix;
    const vertices = this.vertices;

  }

  breadthFirstTraversal(vertex) {
    const visitedVerticesArray = new Array(this.vertices).fill(false);
    const result = [];
    const queueVerticesToBeVisited = [];
    queueVerticesToBeVisited.push(vertex);
    visitedVerticesArray[vertex] = true;
    while (queueVerticesToBeVisited.length) {
      let shiftedVertex = queueVerticesToBeVisited.shift();
      result.push(shiftedVertex);
      for (let i = 0; i < this.vertices; i++) {
        if (
          this.adjacencyMatrix[shiftedVertex][i] === 1 &&
          !visitedVerticesArray[i]
        ) {
          visitedVerticesArray[i] = true;
          queueVerticesToBeVisited.push(i);
        }
      }
    }
    return result;
  }
}

const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

graph.printGraph();
console.log(graph.depthFirstTraversal(3));
console.log(graph.breadthFirstTraversal(2));

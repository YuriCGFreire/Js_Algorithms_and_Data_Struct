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
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  }

  // Encontrtar a entry que está o vertice
  // Fazer um loop para cada um de seus edges daquele vertice
  // e chamar removeEdge passado o vertex da função e o vertice que ta dentro do array
  // No final eu removo o vertex passado na função de dentro da adjacencyList
  removeVertex(vertex){
    if(this.adjacencyList[vertex]){
      this.adjacencyList[vertex].forEach(v => this.removeEdge(vertex, v))
      delete this.adjacencyList[vertex]
    }
  }
}

const newGraph = new UndirectedGraph();
newGraph.addVertex("Tokyo");
newGraph.addVertex("Brasil");
newGraph.addVertex("Angola");
newGraph.addVertex("Paraguai");
newGraph.addVertex("EUA");
newGraph.addEdge("Brasil", "Tokyo");
newGraph.addEdge("Brasil", "Angola");
newGraph.addEdge("Paraguai", "Angola");
newGraph.addEdge("Brasil", "EUA");
newGraph.addEdge("Paraguai", "EUA");
newGraph.addEdge("EUA", "Tokyo");
// newGraph.removeEdge("Brasil", "Angola");
console.log(newGraph)
// newGraph.removeVertex("Paraguai")
// newGraph.removeVertex("EUA")
console.log(newGraph)

// Criar uma priority queue usando Binary Heaps
// WHAT IS A
// PRIORITY QUEUE?
// A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// Write a Min Binary Heap - lower number means higher priority.
// Each Node has a val and a priority.  Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.
// Priority 1, most important priority
// Priotity 2, second one
// Priority 3, not so much

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // ENQUEUE PSEUDOCODE
  // Push the value into the values property on the heap
  // Bubble Up:
  // Create a variable called index which is the length of the values property - 1
  // Create a variable called parentIndex which is the floor of (index-1)/2
  // Keep looping as long as the values element at the parentIndex is less the values element at the child index
  // Swap the value of the values element at the parentIndex with the value of the element property at the child index
  // Set the index to be the parentIndex, and start over!
  enqueue(value, priority) {
    // Criar o node que será inserido na priorityQueue
    let newNode = new Node(value, priority);
    // Inserir o node
    this.values.push(newNode);
    // Variavel que vai me ajudar a rastrear a posição que node se encontra e ela vai startar
    // com o final da priorityQueue
    let index = this.values.length - 1;
    // Percorrer o codigo abaixo enquanto index for maior que 0
    while (index > 0) {
      // Variavel que vai servir para rastrear a posição do pai do novo elemento
      let parentIndex = Math.floor((index - 1) / 2);
      // A causa de parada do while vai ser quando a prioridade do pai do elemento atual for maior ou igual
      // a prioridade do elemento atual
      if (this.values[index].priority >= this.values[parentIndex].priority)
        break;
      // Faço a troca de posição dos elementos
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      // E como eu troquei o elemento de posição eu preciso mudar o seu index tbm
      index = parentIndex;
    }
    return this;
  }

  // Dequeueing - Extract Min
  // Swap the first value in the values property with the last one
  // Pop from the values property, so you can return the value at the end.
  // Have the new root "sink down" to the correct spot...​
  // Your parent index starts at 0 (the root)
  // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  // Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
  // If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  // The child index you swapped to now becomes the new parent index.
  // Keep looping and swapping until neither child is larger than the element.
  // Return the old root!
  dequeue() {
    // Armazeno o valor da raiz em uma variavel
    let oldRoot = this.values[0];
    // Faço o ultimo elemento ser a raiz
    this.values[0] = this.values[this.values.length - 1];
    // E removo o ultimo elemento
    this.values.pop();
    // Agora preciso colocar o primeiro elemento no local correto e pra isso preciso da variavel que vai
    // rastrear sua posição e ele começa na posição 0
    let index = 0;
    // Vou repetir o codigo abaixo enquanto o index for menor que o length de values - 1
    while (index <= this.values.length - 1) {
      // Preciso criar a variável que vai rastrear os filhos, filho esquerdo e filho direito
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      if(!this.values[leftChildIndex] || !this.values[rightChildIndex])break
      // Variavel que vai identificar qual o filho que tem maior prioridade
      let largestChildIndex =
        this.values[leftChildIndex].priority < this.values[rightChildIndex].priority
          ? leftChildIndex
          : rightChildIndex;
      // Preciso criar uma condição de parada para o while
      // O while vai parar se o largesChildIndex for >= this.values.length
      if (
        largestChildIndex >= this.values.length ||
        (this.values[leftChildIndex].priority >= this.values[index].priority &&
          this.values[rightChildIndex].priority >= this.values[index].priority)
      )
        break;
    //   Se passar da condição acima eu faço a troca do elemento no indice index com o elemento no indice largestChildINdex
      let temp = this.values[index]
      this.values[index] = this.values[largestChildIndex]
      this.values[largestChildIndex] = temp
    //   E então troco o valor de index para o valor de largestChildIndex
       index = largestChildIndex
    }
    return oldRoot;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Lavar louça", 3);
priorityQueue.enqueue("Cortar cabelo", 3);
priorityQueue.enqueue("Ir ao oftalmologista", 1);
priorityQueue.enqueue("Ir à academia", 2);
priorityQueue.enqueue("Estudar dev web", 1);
priorityQueue.enqueue("Enviar CV", 1);
priorityQueue.enqueue("Tomar banho", 2);
priorityQueue.enqueue("Assistir TV", 3);

console.log(priorityQueue.dequeue())
console.log(priorityQueue);

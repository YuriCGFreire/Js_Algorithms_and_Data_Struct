class SLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //   Enqueue
  // Adding to the beginning of the Queue!
  // Remember, queues are a FIFO data structure
  // Pensando na otimização da Queue e a forma como ela funciona
  // Eu preciso sempre adicionar o novo elemento na posição last, para que o primeiro elemento
  // Seja o primeiro a ser removido, pois fazendo dessa forma eu não preciso percorrer a lista
  // E o meu algoritmo vai ficar otimizado com um bigO(1)
  // Verifico se a stack ta vazia, se tiver eu faço o novo elemento ser o first e o last
  // se não eu adiciono o novo elemento ao final da fila. Faço o novo elemento ser o next do oldLast
  //
  enqueue(value) {
    var newNode = new SLNode(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
  traverse() {
    var current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    return "Fim!";
  }
  //Vou remover o primeiro elemento da queue
  //Se a queue tiver vazia eu retorno null
  //Se o first for igual ao last, eu faço o last ser null
  //Então faço o first ser o next do first
  //Subtario 1 do size
  //e retorno o value do elemento removido
  dequeue() {
    if(!this.size) return null
    var oldFirst = this.first
    if(this.first === this.last){
        this.last = null
    }
    this.first = this.first.next
    this.size--
    return oldFirst.value
  }
}

const queue = new SLQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue);

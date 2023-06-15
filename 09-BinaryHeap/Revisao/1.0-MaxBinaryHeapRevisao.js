// Criar uma priority queue que consiste de ser uma binary heap
// E quanto menor for o valor de priority, maior é a sua prioridade
class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Enqueue
  // O metodo enqueue consiste em inserir um valor no final de this.values
  // e ir verificando se seus pais são maiores ou menores que o valor inserido no final
  // Se o valor for menor eu troco os dois de lugar, se for maior eu mantenho ele no local
  // E faço isso em um loop até encontrar o seu local adequado
  enqueue(data, priority) {
    // Criar o node
    let newNode = new Node(data, priority);
    // E então insiro o nosso novo node no final de this.values
    this.values.push(newNode);
    // Criar um ponteiro que vai indicar a posição do nosso newNode e ele vai começar na posição final do array
    let index = this.values.length - 1;
    // Correr o codigo abaixo em um loop. Nesse caso eu vou colocar um limite que é se o index ainda for maior
    // que 0 que indica o primeiro valor de this.values
    while (index > 0) {
      // Agora preciso criar um variavel que vai rastrear o pai do valor inserido
      // Como diz nas propriedades da binaryHeap o pai pode ser encontrado na seguinte formula
      // (index-1)/2 arredondado para baixo
      let parentIndex = Math.floor((index - 1) / 2);
      // Agora preciso criar a condição de parada do while, caso o nosso index não chegue a 0
      // devido seu pai ter mais prioridade que ele
      // a condição de parada vai ser quando o pai do valor inserido for menor que ele
      if (this.values[index].priority >= this.values[parentIndex].priority)
        break;
      // Caso não caia na condiação acima, isso quer dizer que o nosso valor novo é menor que o pai dele
      // e então fazemos a troca
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      // Como eu fiz a troca de posições, a posição do novo valor agora é a posição do seu antigo parent
      // e para isso eu preciso trocar a variável index
      index = parentIndex;
    }
    // Quando sair do loop eu retorno this
    return this;
  }

  // Dequeue
  // Armazenar o dado de maior prioridade em uma variavel
  // Depois a gente vai colocar o ultimo valor da binary heap no começo dela
  // e então excluir esse valor
  // Depois de feito isso vamos percorrer a binary heap, verificando se seus filhos
  // Tem maior ou menor prioridade do que esse valor inserido no começo
  // Se seus filhos tiverem menor prioridade a gente para o loop se nao a gente continua trocando
  // até chegar nessa condição
  dequeue() {
    // armazenar o valor da raiz antiga numa variavel
    var oldRoot = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    // Agora a gente precisa encontrar a posição adequada do primeiro elemento
    // Armazenar sua posição numa variavel pra que a gente possa sempre rastrear onde ele esta
    // e ele vai estar no começo de this.values
    var index = 0;
    // A condição de parada do nosso loop, será quando o index atigir o final do array
    while (index <= this.values.length - 1) {
      // Diferente da ultima função, nesse caso nos precisamos rastrear sempre os dois filhos
      // e não só um valor e a prorpiedade para rastrea-los é a seguinte
      // filho da esquerda = 2 * index + 1
      // filho da direita = 2 * index + 2
      // Ex.:
      // [10, 9, 8] - 9 (filho da esquerda) e 8 (filho da direita)
      var leftChildIndex = 2 * index + 1;
      var rightChildIndex = 2 * index + 2;
      if (!this.values[leftChildIndex] || !this.values[rightChildIndex]) break;
      // Nesse caso eu vou armazenar o indice do filho de maior prioridade em uma variavel
      var largestChildIndex =
        this.values[leftChildIndex].priority <
        this.values[rightChildIndex].priority
          ? leftChildIndex
          : rightChildIndex;
      // A nossa condição de parada vai ser se o indice do maior filho for maior que o length do array
      // e se os filhos tiverem menor prioridade que o valor que estamos trabalhando
      if (
        largestChildIndex >= this.values.length ||
        (this.values[leftChildIndex].priority >= this.values[index].priority &&
          this.values[rightChildIndex].priority >= this.values[index].priority)
      )
        break;

      // Caso nao caia na condição acima a gente faz a troca do valor com o maior filho
      var temp = this.values[index];
      this.values[index] = this.values[largestChildIndex];
      this.values[largestChildIndex] = temp;
      // E então mudo o valor de index para o index do filho com maior prioridade
      index = largestChildIndex;
    }
    // retorno o valor removido
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

priorityQueue.dequeue();
priorityQueue.dequeue();
console.log(priorityQueue);

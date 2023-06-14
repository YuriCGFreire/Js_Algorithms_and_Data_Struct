// Stack é uma estrutura de dados onde o ultimo valor inserido é o primeiro a sair
// Pode ser criado usando arrays, mas também pode ser criado usando uma linked list

// Uma stack baseada em (singly) liked list é composta por tres valores, um last, um first node
// e um size
// Esses nodes vão sempre apontar para o próximo node e vao ter um valor, que pode ser uma frase,
// numero, dado e etc

// Criando o node
class SLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLStack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //   PUSHING
  // Add a value to the top of the stack!
  // Essa função vai criar um node novo e inserir na stack
  // Se não tiver nada na stack, esse novo valor vai ser o first e o last
  // Se tiver valor, eu faço o last apontar para o novo valor e o novo valor ser o novo last
  // Feito isso eu aumento o size da stack
  // E retorno o size da stack
  // Obs:
  // Eu tinha proposto colocar o elemento como last da stack, mas so depois eu percebi que isso faria
  // com que eu precisasse percorrer a stack ate o penultimo elemento quando fosse fazer um pop
  // Então para otimizar a minha stack, eu posso adicionar o novo elemento como sendo o first da stack
  // Isso se da pq eu estou usando uma singly linked list
  push(value) {
    let newNode = new SLNode(value);
    // Posso verificar se uma stack esta vazia, vendo o seu tamanho ou vendo se last e first sao nulls
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      newNode.next = oldFirst;
      this.first = newNode;
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
  // POP
  // Remove a value from the top of the stack!

  // Devo remover o ultimo elemento adicionado na stack e esse ultimo elemento é o first da stack
  // Se a stack tiver vazia eu retorno null
  // Se o firts for igual ao last, eu faço o last ser null
  // Eu faço next do first atual se tornar o seu next
  // subtrario 1 do size da stack e retorno o elemento excluido
  pop() {
    if(!this.size) return null;
    var oldFirst = this.first;
    if(this.first === this.last){
        this.last = null
    }
    this.first = this.first.next
    this.size--
    return oldFirst.val;
  }
}

const stack = new SLStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack.traverse());

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // INSERT PSEUDOCODE
  // Push the value into the values property on the heap
  // Bubble Up:
  // Create a variable called index which is the length of the values property - 1
  // Create a variable called parentIndex which is the floor of (index-1)/2
  // Keep looping as long as the values element at the parentIndex is less the values element at the child index
  // Swap the value of the values element at the parentIndex with the value of the element property at the child index
  // Set the index to be the parentIndex, and start over!
  insert(value) {
    // Insiro o valor na posição final do heap
    this.values.push(value);
    var index = this.values.length - 1;
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] <= this.values[parentIndex]) break;
      var temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
    }
    return this;
  }

  //   REMOVING - Extract Max
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
  extractMax() {
    // Armazenar raiz antiga em uma variavel
    var oldRoot = this.values[0];
    // Passar o ultimo valor para a primeira posição de this.values
    this.values[0] = this.values[this.values.length - 1];
    // Remover o ultimo elemento de this.values
    this.values.pop();
    // Criar variavel index. Essa variavel é uma formar de rastrear a nova raiz que eu vou precisa
    // jogar pra baixo
    var index = 0;
    // enquanto o index for menor que o length de this.values
    while (index <= this.values.length - 1) {
      // armazenar o indice dos dois filhos do elemento em uma variavel
      var leftChildIndex = 2 * index + 1;
      var rightChildIndex = 2 * index + 2;
      // Crio uma variavel para armazenar o indice do maior filho
      var largestChild =
        this.values[leftChildIndex] > this.values[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
      // "Quebro" o while loop quando o valor de maior filho for maior ou igual ao length de this.values
      // ou se o valor do elemento na posição index for maior que os seus dois filhos
      if (
        largestChild >= this.values.length ||
        (this.values[index] >= this.values[leftChildIndex] &&
          this.values[index] >= this.values[rightChildIndex])
      )
        break;
      // Faço a troca de posição
      var temp = this.values[index];
      this.values[index] = this.values[largestChild];
      this.values[largestChild] = temp;
      // Mudo o index para o index do maior filho
      index = largestChild;
    }
    return oldRoot;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(1);
maxBinaryHeap.insert(41)
maxBinaryHeap.insert(39)
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(18)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(12)
maxBinaryHeap.insert(55)

console.log(maxBinaryHeap.values);
console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.values);

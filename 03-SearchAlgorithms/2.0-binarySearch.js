// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

// function binarySearch(arr, value) {
//   // Vou usar ponteiros
//   // Um ponteiro vai apontar pro inicio do array e o outro pro final do array
//   // E um terceiro vai apontar pro meio do array
//   let arrayStart = 0;
//   let arrayEnd = arr.length - 1;
//   // O ponteiro do meio vai ser arr.length / 2 arredondao pra baixo
//   // Eu não posso escolher o midPoint como dito acima, pq ele vai estar fixo sempre no tamanho total do array
//   // E eu preciso que ele seja dinamico, então como escolher? Somando o arrayStart mais arrayEnd e dividindo o valor por 2
//   // let midPoint = Math.floor(arr.length / 2)
//   let midPoint = Math.floor((arrayStart + arrayEnd) / 2);
//   // Vou repetir o codigo abaixo enquanto os ponteiros não se encontrarem
//   // E eles vão se encontrar quando tiverem na mesma posição
//   while (arrayStart <= arrayEnd) {
//     // eu comparo o valor passado no parametro com o valor do meio do array
//     if (value === arr[midPoint]) {
//       return midPoint;
//       // Se o valor for maior que o valor do midpoint, eu mudo o valor do arrayStart, pra um elemento depois do midpoint
//     } else if (value > arr[midPoint]) {
//       arrayStart = midPoint + 1;
//       // Se for menor que o midpoint eu mudo o arrayEnd para o elemento antes do midpoint
//     } else if (value < arr[midPoint]) {
//       arrayEnd = midPoint - 1;
//     } 
//     midPoint = Math.floor((arrayStart + arrayEnd) / 2)
//   }

//   return -1;
// }

// Recursive BinarySearch

function binarySearch(arr, value){
    if(arr.length === 1 && arr[0] != value){
        return -1;
    }
    let midPoint = Math.floor(arr.length / 2)
    if(arr[midPoint] === value){
        return arr[midPoint]
    }else if(value > arr[midPoint]){
        return binarySearch(arr.slice(midPoint), value)
    }else if(value < arr[midPoint]){
        return binarySearch(arr.slice(0, midPoint), value)
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1

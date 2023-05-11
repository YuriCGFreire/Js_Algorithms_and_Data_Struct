// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Estrategia para resolver o problema: 
// Criar dois ponteiros, um vai iniciar na posição 0 e o outro na posição 1
// Eu comparo o valor dos dois, se for igual eu ando uma casa com o segundo ponteiro e sigo essa logica até encontrar um numero diferente
// do primeiro ponteiro
// Caso o numero seja diferente, eu ando uma casa com o primeiro ponteiro e coloca o valor do segundo ponteiro no local onde esta o primeiro ponteiro
// E continuo fazendo as comparações até acabar os valores do array
// Quando acabar eu retorno o valor do primeiro ponteiro + 1

function countUniqueValues(arr){
    // Se o length for 0 eu retorno 0
    if(arr.length == 0){
        return 0
    }
    // Criar os ponteiros que vão percorrer o array
    let left = 0
    let right = 1
    // E eu vou parar o while quando o ponteiro da direita for do tamanho do length do array
    while(right < arr.length){
        // Verifico se o valor de arr[right] === arr[left]. Se for eu ando com arr[right]++
        if(arr[right] === arr[left]){
            right++
        }else if(arr[right] !== arr[left]){
            // se a condição acima for verdade, eu vou andar o left++ e armazenar no arr[left] o valor de arr[right]
            left++
            arr[left] = arr[right]
        }
    }
    return left + 1
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))
console.log(countUniqueValues([-2,-1,-1,0,1, 2, 2, 2, 2]))
function mergeArrays(arr1, arr2){
    //Criar um array que vai receber os valores ordenados dos dois arrays
    let mergedArray = [];
    //Vou adotar as estrategia de ponteiros, um vai apontar para os valores do primeiro array e o outro 
    //os valores do segundo 
    let firstArrayPointer = 0;
    let secondArrayPointer = 0;
    //Vou repetir o codigo abaixar enquanto o ponteiro do primeiro array for menor que o length
    //ou enquanto o ponteiro do segundo array for menor que o length
    while(firstArrayPointer < arr1.length && secondArrayPointer < arr2.length){
        // Aqui eu faço as verificações 
        // se o valor que o primeiro ponteiro apontar for menor que o valor que o segundo ponteiro apontar,
        // eu add ele no mergedArray e add + 1 no primeiro ponteiro 
        // caso contrário, eu add o valor do segundo ponteiro no mergedArray e add + 1 ao segundo ponteiro
        if(arr1[firstArrayPointer] <= arr2[secondArrayPointer]){
            mergedArray.push(arr1[firstArrayPointer])
            firstArrayPointer++
        }else{
            mergedArray.push(arr2[secondArrayPointer])
            secondArrayPointer++
        }
    }

    // Enquanto tiver algum valor em algum array, eu adiciono eles ao mergedArray
    while(firstArrayPointer < arr1.length){
        mergedArray.push(arr1[firstArrayPointer])
        firstArrayPointer++
    }

    while(secondArrayPointer < arr2.length){
        mergedArray.push(arr2[secondArrayPointer])
        secondArrayPointer++
    }

    return mergedArray
}

// mergeSort é uma função recursiva que usa a ideia de dividir para conquistar
// Como eu vou dividir o array? Chamando mergeSort recursivamente, passando a metade do array
// E como nossa função mergeArrays, junta dois arrays ordenados, eu vou dividir o nosso array original 
// uma parte esquerda, uma parte direita e passar ela para mergeArrays
function mergeSort(arr){
    // preciso criar o caso base
    // O caso base irá retornar o arr se por algum acaso ele for igual a 1
    if(arr.length === 1){
        return arr
    }
    // Define o meio do array
    let mid = Math.floor(arr.length / 2)
    // Então chamo mergeSort passando cada um dos lados do array. Lado esquerdo 
    // e lado direito 
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    // e retorno o array ja combinado 
    // chamando a função mergeArrays que vai juntar os dois lados do array, direito e esquerda
    return mergeArrays(left, right)
}

console.log(mergeSort([1, 10, 3, 11, 99, 500, 23, 0, 11, 22, 22]))
console.log(mergeSort([49, 12, 1, 99, 0, 9, -2, -1, 200, 9, 2]));
console.log(mergeSort([7, 6, 5, 4, 3, 2, 1]));
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7]));
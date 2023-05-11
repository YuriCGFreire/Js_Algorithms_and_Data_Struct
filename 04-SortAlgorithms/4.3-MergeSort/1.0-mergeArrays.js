// Write a function that merge two sorted arrays
// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at...
// If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// Once we exhaust one array, push in all remaining values from the other array
function mergeArrays(arr1, arr2){
    //Criar um array que vai receber os valores ordenados dos dois arrays
    const mergedArray = [];
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

console.log(mergeArrays([1, 10, 50, 99, 100], [2, 14, 100]))
console.log(mergeArrays([1, 10], [2, 14, 50, 99, 100]))

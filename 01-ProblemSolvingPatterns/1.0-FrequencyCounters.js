// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2){
    //Verificar se os arrays tem o mesmo tamanho, se não tiver, return false
    if(arr1.length !== arr2.length) {
        return false
    }
    //Preciso armazenar os valores em objetos, pois será nele que eu vou verificar a frequencia de vezes que esse valor aparece no array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //Percorrer ambos os arrays para armazenar seus valores e frequencia de cada valor nos frequency Counters
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    //Percorrer cada chave do primeiro frequencyCounter 
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key] != frequencyCounter2[key ** 2]){
            return false
        }        
    }

    return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
console.log(same([1, 2, 3, 2], [9, 1, 4]))
console.log(same([1, 2, 2], [9, 1, 4]))
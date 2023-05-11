// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(number1, number2){
    // Transformar os valores em string
    let numberToString1 = number1.toString()
    let numberToString2 = number2.toString()
    if(numberToString1.length !== numberToString2.length){
        return false
    }
    // criar as variaveis que vão guardar os numeros individuais e as frequencias desses numeros
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // um for para para armazenar os numeros e suas frequencias em cada um dos contadores
    for(let value of numberToString1){
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(let value of numberToString2){
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }
    // Percorrer um for em um dos contadores de frequencia e verificar se a frequencia de cada valor é igual 
    // a frequencia dos valores do outro contador
    for(let key in frequencyCounter1){
        if(frequencyCounter2[key] !== frequencyCounter1[key] || !(key in frequencyCounter2)){
            return false
        }
    }
    return true
}
3589578, 5879385
console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 22222))
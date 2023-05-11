// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// Estrategia
// Criar dois ponteiros, um inicia no começo do array e o outro no final do array
// E então calculo a média dos valores que esses ponteiros apontam, se a média for maior que a media passada
// Eu subtraio 1 do ponteirno no final do array, se a média entre eles for menor, eu adiciono um ao ponteiro do começo do array
// Faço isso enquanto eles não tiverem o mesmo valor, quando se encontrarem eu paro o while
// Caso o array esteja vazio, retorno false

function averagePair(arr, targetAverage){
    // Verifico se o array está vazio, se estiver eu retorno false
    if(arr.length === 0){
        return false
    }
    // Inicializar os ponteiros
    let leftPointer = 0
    let rightPointer = arr.length - 1
    // Repetir o código, enquanto leftPointer < rightPointer
    while(leftPointer < rightPointer){
        // Calcular a média entre os ponteiros
        let sumAverage = (arr[leftPointer] + arr[rightPointer]) / 2
        if(sumAverage == targetAverage){
            return true
        }else if(sumAverage > targetAverage){
            rightPointer--
        }else{
            leftPointer++
        }
    }
    return false
}

console.log(averagePair([1,2,3],2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([],4))
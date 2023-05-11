// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

function minSubArrayLen(arr, number){
    // Eu preciso dos ponteiros que vão indicar a janela 
    // Um ponteiro head, vai afrente e o ponteiro tail vai atrás
    let head = 0;
    let tail = 0;
    // Preciso criar a variavel que vai somar os valores
    let sum = 0;
    // Criar a variavel que vai verificar qual o menor numero de elementos somados que deu o valor de number
    // obs: number é o parametro passado no parametro da função
    let minLenSum = Infinity;
    // Eu vou percorrer o percorrer o array enquanto o tail for menor ou igual ao length do array
    while(tail <= arr.length){
        // Quando eu vou somar o elemento ao sum? Vou somar enquanto o sum < number
        // depois de somar o elemento a sum, eu add head++
        if(sum < number && head <= arr.length){
            sum+=arr[head]
            head++
            // Quando vou subtrair o valor do elemento do array a sum? Eu vou subtrair quando o valor de sum for >= number
            // Mas é aqui também que eu vou precisar verificar qual o minLenSum
        }else if(sum >= number){
            // primeiro verificar o minLenSum
            minLenSum = Math.min(minLenSum, (head - tail))
            sum-= arr[tail]
            tail++
        }else{
            break
        }
    }
    return minLenSum === Infinity ? 0 : minLenSum
}

console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
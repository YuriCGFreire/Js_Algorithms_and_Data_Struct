// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

// Estrategia


function maxSubarraySum(arr, number){
    if(number > arr.length){
        return null
    }
    // Criar uma variável para somar os valores 
    let sum = 0;
    // Uma variavel para verificar a maior soma
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        // somar os valores do array em sum
        sum += arr[i]
        // agora se o i for maior que number, eu vou precisar subtrair o valor 
        // que esteja na posição number -1
        if(i >= number - 1){
            maxSum = Math.max(maxSum, sum)
            sum -= arr[i - (number - 1)]
        }
    }
    return maxSum
}

console.log(maxSubarraySum([400,300,100,200], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
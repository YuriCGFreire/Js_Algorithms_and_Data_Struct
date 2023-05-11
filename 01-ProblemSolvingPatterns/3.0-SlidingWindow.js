// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

function maxSubarraySum(arr, number){
    // Se array vazio, return null
    if(arr.length == 0){
        return null
    }
    // Variavel para armazenar a soma
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < number; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i = number; i < arr.length; i++){
        tempSum = tempSum - arr[i - number] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
}

maxSubarraySum([1,2,5,2,8,1,5],4)
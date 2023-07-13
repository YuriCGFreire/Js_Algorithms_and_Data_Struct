// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

var topKFrequent = function(nums, k) {
    const frequencyCounter = {}
    const arr = []
    const output = []
    nums.forEach(num => {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
    })
    for(let key in frequencyCounter){
        arr.push([key, frequencyCounter[key]])
    }
    arr.sort((a, b) => {
        return b[1] - a[1]
    })    
    for(let i = 0; i < k; i++){
        output.push(Number(arr[i][0]))
    }
    return output
};

const nums1 = [5,5,5,5,2,2,3,1,1,1,4,4,4,4,4,4,4] //2
const nums2 = [1] //1
const nums3 = [1,1,1,2,2,3] //1

console.log(topKFrequent(nums1, 2))
console.log(topKFrequent(nums2, 1))
console.log(topKFrequent(nums3, 2))
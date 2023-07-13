// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

var productExceptSelf = function(nums) {
    const arrayAnswer = new Array(nums.length).fill(1)
    let prefix = 1
    for(let i = 0; i < nums.length; i++){
        arrayAnswer[i] *= prefix
        prefix *= nums[i]
    }
    let postFix = 1
    for(let i = nums.length - 1; i >= 0; i--){
        arrayAnswer[i] *= postFix
        postFix *= nums[i]
    }
    return arrayAnswer
};

const nums1 = [1,2,3,4]
const nums2 = [-1,1,0,-3,3]
const nums3 = [0, 0]

console.log(productExceptSelf(nums1))
console.log(productExceptSelf(nums2))
console.log(productExceptSelf(nums3))
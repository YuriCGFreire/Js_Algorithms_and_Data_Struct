// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Example 1:
// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

// Example 2:
// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

// My solution
var getConcatenation = function(nums) {
    const ans = []
    for(let i = 0; i < nums.length; i++){
        ans[i] = nums[i]
    }
    return ans.concat(nums)
};

// Other solution
var getConcatenation2 = function(nums){
    const ans = []
    for(let i = 0; i < nums.length * 2; i++){
        ans[i] = nums[i % nums.length]
    }
    return ans
}



const nums1 = [1,3,2,1]
const nums2 = [1,2,1]


// console.log(getConcatenation(nums1))
// console.log(getConcatenation(nums2))
console.log(getConcatenation2(nums1))
// console.log(getConcatenation2(nums2))


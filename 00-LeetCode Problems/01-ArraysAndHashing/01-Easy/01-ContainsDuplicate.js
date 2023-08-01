// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Aproach of Frequency Counter 

// My Solution
var containsDuplicate = function(nums) {
    const frequencyCounter = {}
    for(let num of nums){
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
        if(frequencyCounter[num] > 1){
            return true
        }
    }
    return false
};

const nums = [1,1,1,3,3,4,3,2,4,2]
const nums2 = [1,2,3,4]
console.log(containsDuplicate(nums))
console.log(containsDuplicate(nums2))
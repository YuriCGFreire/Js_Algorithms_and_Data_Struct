// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// My solution - Not a good solution (Big O (n²))
var twoSum = function (nums, target) {
  let tail = 0;
  let head = 1;
  while (tail < nums.length - 1) {
    if (nums[tail] + nums[head] === target) {
      return [tail, head];
    }
    if (head >= nums.length - 1) {
      tail++;
      head = tail + 1;
    } else {
      head++;
    }
  }
};
// Others solution (Big O(n))
var twoSum2 = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in hashMap) {
      return [hashMap[diff], i];
    }
    hashMap[nums[i]] = i;
  }
  return;
};

console.log(twoSum2([7, 2, 11, 15], 9));
// console.log(twoSum2([2, 1, 5, 3], 4));
// console.log(twoSum2([3, 2, 4], 6));
// console.log(twoSum2([3, 3], 6));
// console.log(twoSum2([2, 5, 5, 11], 10));

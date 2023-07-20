// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function (nums) {
  const hashSet = new Set(nums);
  let longestConsecutiveNumbers = 0;
  for (let num of nums) {
    if (!hashSet.has(num - 1)) {
      var sequence = 0;
      while(hashSet.has(num + sequence)){
        sequence+=1
      }
      longestConsecutiveNumbers = Math.max(sequence, longestConsecutiveNumbers);
    }
  }
  return longestConsecutiveNumbers;
};

const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

console.log(longestConsecutive(nums1));
console.log(longestConsecutive(nums2));
console.log(longestConsecutive(nums3));

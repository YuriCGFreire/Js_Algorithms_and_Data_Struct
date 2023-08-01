// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// My solution
var groupAnagrams = function(strs) {
    const hashMap = {}
    strs.forEach(str => {
        var lowerCaseStr = str.toLowerCase()
        var sortedString = lowerCaseStr.split("").sort().join("")
        if(!hashMap[sortedString]){
            hashMap[sortedString] = [lowerCaseStr]
        }else{
            hashMap[sortedString].push(lowerCaseStr)
        }
    })
    console.log(hashMap)
    return Object.values(hashMap)
};


const strs = ["Eat","tea","tan","ate","nat","bat"]
const strs1 = ["Eat"]
const strs2 = [""]
console.log(groupAnagrams(strs))
// console.log(groupAnagrams(strs1))
// console.log(groupAnagrams(strs2))
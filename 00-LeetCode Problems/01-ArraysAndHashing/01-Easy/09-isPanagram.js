// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// Example 2:
// Input: sentence = "leetcode"
// Output: false

var checkIfPangram = function(sentence) {
    const hashSet = new Set(sentence)
    if(hashSet.size === 26){
        return true
    }
    return false
};

const sentence1 = "thequickbrownfoxjumpsoverthelazydog";
const sentence2 = "leetcode";

console.log(checkIfPangram(sentence1))
console.log(checkIfPangram(sentence2))
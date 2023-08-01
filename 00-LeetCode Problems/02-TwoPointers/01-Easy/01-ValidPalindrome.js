// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


var isPalindrome = function(s) {
    const word = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()  
    if(word.length == 0) return true
    let leftPointer = 0
    let rightPointer = word.length - 1
    while(leftPointer <= rightPointer){
        if(word[leftPointer] === word[rightPointer]){
            leftPointer++
            rightPointer--
        }else{
            return false
        }
    }
    return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))

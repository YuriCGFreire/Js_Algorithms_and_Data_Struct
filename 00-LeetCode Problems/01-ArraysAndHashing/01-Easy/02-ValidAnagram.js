// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Ou seja ela precisa ter as mesmas letras, a mesma quantidade de letras e cada letra precisa ter a mesma quantidade 
// em ambas as palavras

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//My solution
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    for(let letter of s){
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1
    }
    for(let letter of t){
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1

    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2) || frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true
};
// console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("rat", "car"))

// How to refactor this code
var isAnagram2 = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    for(let letter = 0; letter < s.length; letter++){
        frequencyCounter1[s[letter]] = (frequencyCounter1[s[letter]] || 0) + 1
        frequencyCounter2[t[letter]] = (frequencyCounter2[t[letter]] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2) || frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true
};
console.log(isAnagram2("anagram", "nagaram"))
console.log(isAnagram2("rat", "car"))
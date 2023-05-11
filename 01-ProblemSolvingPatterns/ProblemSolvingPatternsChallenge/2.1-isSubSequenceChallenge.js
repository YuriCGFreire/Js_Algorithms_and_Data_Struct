// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)

// Space Complexity - O(1)

// Estrategia
// Criar dois ponteiros, um para cada string, que vai iniciar no começo de cada string
// Vou comparar o valor que cada um desses ponteiros apontam, se eles forem iguais eu ando com os dois
// se eles forem diferente, eu ando apenas com o segundo ponteiro
// Fazer isso enquanto os ponteiros forem menor que o length de cada uma de suas strings
// se o ponteiro da primeira string for igual ao length dela, eu retorno true, se não eu retorno false

function isSubsequence(str1, str2){
    let firstStringPointer = 0
    let seccondStringPointer = 0
    while(firstStringPointer < str1.length && seccondStringPointer < str2.length){
        if(str1[firstStringPointer] === str2[seccondStringPointer]){
            firstStringPointer++
            seccondStringPointer++
        }else{
            seccondStringPointer++
        }
    }
    if(firstStringPointer === str1.length){
        return true
    }else{
        return false
    }
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))
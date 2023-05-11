// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(string){
    if(string.length === 0){
        return 0
    }
    let right = 0;
    let left = 0;
    let frequencyCounter = {}; //b : 1 / right = 1
    let longestsubstring = -Infinity;
    while(left < string.length){
        if(!(string[right] in frequencyCounter) && right < string.length){
            console.log(longestsubstring)
            console.log(frequencyCounter)
            frequencyCounter[string[right]] = (frequencyCounter[string[right]] || 0) + 1
            right++
        }else if(string[left] in frequencyCounter){
            delete frequencyCounter[string[left]]
            longestsubstring = Math.max(longestsubstring, right - left)
            left++
        }else{
            break
        }
    }
    return longestsubstring;
}

// function findLongestSubstring(str){
//     // Primeiro eu preciso criar as variáveis que vão me auxiliar, a variavel que será as pontas da janela
//     // start e end
//     let end = 0
//     let start = 0
//     // depois uma variavel chamada max, que vai me informar qual a quantida max de caracteres sequenciais encontradas
//     let max = - Infinity
//     // eu acho que preciso usar um objeto (99% de ctz que sim). Vou precisar sim 
//     let auxiliaryObj = {}
//     // Esse objeto vai conter os caracteres, toda vez que eu passar por um caractere na string e ele não tiver no objeto, eu 
//     // add esse caractere no objeto, se já tivr la eu caio no else para correr a variavel end
//     // Aqui a mesma estrategia, eu vou percorrer a string enquanto end for menor que a string
//     if(str.length === 0){
//         return 0
//     }
//     while(end < str.length){
//         // se start for menor que str.length e a letra obj[str[start]] não tiver no objeto ou for menor que 1
//         if(start < str.length && !auxiliaryObj[str[start]]){
//             // eu adiciono a letra no objeto e adiciono mais 1 em start
//             auxiliaryObj[str[start]] = 1
//             start++
//         // se obj[str[end]] contem no objeto ou for maior ou igual a 1
//         }else if(auxiliaryObj[str[end]] >= 1){
//             // eu subtrario 1 de obj[str[end]]
//             auxiliaryObj[str[end]] = 0
//             // verifico a variavel count, pra saber qual a maior sem que as letras se repitam
//             max = Math.max(max, start - end)
//             // e add +1 em end
//             end++
//         // se nenhuma das condições acimas forem atendidas, eu dou um break
//         }else{
//             break
//         }

//     }
//     // retorno max
//     return Math.max(max, start - end)
// }

// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Receber duas strings, verificar se as duas strings tem as mesmas letras e essas letras tem as mesma frequencia
// Se tiver mesma frequencia e mesmas letras return true se nao return false

function check_if_its_anagram(str1, str2){
    // Primeiro verificar o length
    if(str1.length !== str2.length){
        return false
    }
    // Criar os frequencyCounters
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // Percorrer as strings, armazenar as letras e suas frequencias nos frequencyCounters
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // Percorrer o primeiro objeto e verificar se suas chaves e valores tbm se encontram no segundo objeto
    // objetos esses que me refiro são os frequencyCounters
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2) || frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true
}



console.log(check_if_its_anagram("anagram", "nagaram"))
console.log(check_if_its_anagram("rat", "car"))
console.log(check_if_its_anagram('qwerty', 'qeywrt'))
console.log(check_if_its_anagram('texttwisttime', 'timetwisttext'))
console.log(check_if_its_anagram('', ''))
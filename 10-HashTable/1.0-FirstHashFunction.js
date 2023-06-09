// A BASIC HASH FUNCTION

// Uma função que recebe uma string e o tamanho de um array
// armazena em uma variavel chamada total 
// a soma do modulo de cada letra da string passada 
// cada letra vai ter um valor, esse valor é relacionado ao 
// unicode de cada letra subraindo 96 do valor respondido
// ex.: console.log("b".charCodeAt(0) - 96)

function hash(key, arrayLen){
    // criar a variavel que vai armazenar o valor total do modulo de cada letra da string (key)
    let total = 0;
    // percorrer um loop pela string
    for(let char of key){
        // Armazenar o unicode da letra na posição char - 96
        let value = char.charCodeAt(0) - 96
        // calculo o modulo do total + value
        total = (total + value) % arrayLen 
    }
    // retorno o total
    return total
}

// Improving hash function
// Usar numeros primos para o tamanho do array
function improvedHashFunction(key, arrayLen){
    let total = 0;
    let weirdPrime = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * weirdPrime + value) % arrayLen
    }
    return total
}


console.log(improvedHashFunction("bankai", 11))
console.log(improvedHashFunction("aot", 11))
console.log(improvedHashFunction("dksps", 11))
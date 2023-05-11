// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Percorrer os elementos de um array ordenado e retornar eles quando a soma de dois valores der 0
// Caso não tenha valores que a soma de 0, retornar undefined

function sumZero(arr){
    // Criar os ponteiros. Um vai começar na direita e outro na esquerda
    let direita = arr.length - 1
    let esquerda = 0
    // Repetir o seguinte processo enquanto esquerda < direita
    while(esquerda < direita){
        // verifico a soma dos valores na posição de cada ponteiro
        let soma = arr[esquerda] + arr[direita]
        // se a soma for 0, eu retorno eles
        if(soma === 0){
            return [arr[esquerda], arr[direita]]
        }else if(soma > 0){
            direita--
        }else if(soma < 0){
            esquerda++
        }
    }
    return undefined
}


console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3]))
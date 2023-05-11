function calcFatorial(number){
    let total = 1;
    for(let i = number; i > 0; i--){
        total *= i
    }
    console.log(total)
}

function factorial(number){
    if(number === 1){
        return 1;
    }
    return number * factorial(number - 1)
}

calcFatorial(5)
console.log(factorial(4))
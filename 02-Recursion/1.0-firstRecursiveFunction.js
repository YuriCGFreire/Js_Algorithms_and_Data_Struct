function firstRecursiveFunction(number){
    if(number < 1){
        console.log(number)
        return 
    }
    console.log(number)
    firstRecursiveFunction(number - 1)
}

firstRecursiveFunction(5)
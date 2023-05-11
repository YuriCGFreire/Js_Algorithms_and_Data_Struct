// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicatesUsingFrequencyCounter(...values){
    // armazenar os valores num frequency counter 
    let frequencyCounter = {}
    for(let val of values){
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }
    // verifico se tem alguma key no frequency counter que seu valor seja igual ou maior do que 2
    for(let key in frequencyCounter){
        if(frequencyCounter[key] >= 2){
            return true
        }
    }
    return false
}

console.log(areThereDuplicatesUsingFrequencyCounter(1, 2, 3, 4, 5))
console.log(areThereDuplicatesUsingFrequencyCounter(1, 2, 2))
console.log(areThereDuplicatesUsingFrequencyCounter('a', 'b', 'c', 'a'))

function areThereDuplicatesUsingMultiplePointers(...values){
    // primeiro ordenar os values
    let sortedArrayofValues = values.sort()
    for(let i = 0; i < sortedArrayofValues.length; i++){
        if(sortedArrayofValues[i] == sortedArrayofValues[i + 1]){
            return true
        }
    }
    return false
}

console.log(areThereDuplicatesUsingMultiplePointers('a', 'b', 'c', 'a'))
console.log(areThereDuplicatesUsingMultiplePointers(1, 2, 2))
console.log(areThereDuplicatesUsingMultiplePointers(1, 2, 3, 4, 5))

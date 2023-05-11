// function recursiveRange(number){
//     let sumRange = 0;
//     for(let i = 0; i <= number; i++){
//         console.log(sumRange)
//         sumRange += i
//     }
//     return sumRange    
// }

function recursiveRange(number){
    let sumRange = 0;
    if(number === 0){
        return 0;
    }
    sumRange += number;
    return sumRange += recursiveRange(number - 1)
}

console.log(recursiveRange(6))
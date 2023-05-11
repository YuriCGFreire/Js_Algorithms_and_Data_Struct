// function productOfArray(arr){
//     let result = 1;
//     for(let i = 0; i < arr.length; i++){
//         result *= arr[i]
//     }
//     return result
// }

// function productOfArray(arr){
//     let product = 1;
//     function helperProductOfArray(arr){
//         if(arr.length === 0){
//             return;
//         }
//         product *= arr[0]
//         helperProductOfArray(arr.slice(1))
//     }
//     helperProductOfArray(arr)
//     return product
// }

function productOfArray(arr){
    let product = 1;
    if(arr.length === 0){
        return 1;
    }
    product *= arr[0]
    return product *= productOfArray(arr.slice(1)) 
}

console.log(productOfArray([1,2,3,10]))
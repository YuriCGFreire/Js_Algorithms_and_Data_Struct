function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minimum = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[minimum] > arr[j]){
                minimum = j
            }
        }
        if(minimum !== i){
            let temp = arr[i]
            arr[i] = arr[minimum]
            arr[minimum] = temp
        }
    }
    return arr
}

console.log(selectionSort([55, 12, 8, 30, 9, 1, 2, 8]))
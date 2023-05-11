function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let j = i + 1;
        while(j > 0 && arr[j] < arr[j - 1]){
            let temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
            j--
        }
    }
    return arr
}

console.log(insertionSort([0, 55, 12, 8, 30, 9, 1, 2, 8, 100]))
// checking if the array is sorted


function isSorted(arr) {
    
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] < arr[j-1]) {
            return false
        } 
    }
return true    
}



let arr=[1, 9, 8, 56, 90]
console.log(isSorted(arr));
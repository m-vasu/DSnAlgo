// Remove duplicate from sorted array
// function findDuplicate(arr) {
//     let myset = new Set() 
// for(let x of arr) {
//      myset.add(x)
//     }

//   arr = [...myset]
//     console.log(arr);
// }

// let arr = [1,2,3,3,4,5,5]
// findDuplicate(arr)


// Using 2 pointer Alogrithm

function removeDuplicates(arr) {
    let i = 0 
    for (let j = 1; j< arr.length; j++) {    
          if (arr[i]!=arr[j]) {
            i++
            arr[i] = arr[j]
          }
    }
    
    for (let x = 0; x < i + 1; x++) {
       console.log(arr[x]);
        
    }

}

removeDuplicates(arr) 


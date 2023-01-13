// second Largest element in an array without sorting


function findSecondLargest(arr) {
    let largest = -123432
    let secondLargest = -2324234

    arr.map(x=> {
        if (x>largest) {
            largest = x
        }
    })

    arr.map(s =>{
        if (s>secondLargest && s<largest) {
            secondLargest = s
        }
    })
    console.log(secondLargest);
    
}


let arr=[1, 8, 7, 56, 90]

findSecondLargest(arr)
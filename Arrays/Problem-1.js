// Largest Element in an array

function findLargest(arr) {
    let Largest = -1234234

    arr.map(x => {
        if (x>Largest) {
            Largest = x         
        }
    })
    console.log(Largest)
}


let arr=[1, 8, 7, 56, 90]

findLargest(arr)
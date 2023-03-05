// Brute force Method

// function NGreaterR(arr) {
//     let newarr= []
//     let n =arr.length
   
//     for (let i = 0; i <n; i++) {

//              for (let j = i+1; j <arr.length; j++){
             
//                      if (arr[i]<arr[j]) {
//                           newarr[i] = arr[j]
//                                break
//                         }else if(j == (n-1)){
//                                newarr[i] = -1
//                            }
//                  }
//              }
             
//              return newarr
//     }


let arr = [3,10,2,7,4,9]

// console.log(NGreaterR(arr));

// Optimize way

function NGR(arr) {
    let arrStack = []
    let arr2 = []
    let n = arr.length
    for (let i = n - 1; i >0; i--) {
        if (arrStack.length ==0) {
            arr2.push(-1)    
        }
        else if(arrStack.length > 0 && arrStack[arrStack.length -1] > arr[i]){
                arr2.push(arrStack[arrStack.length -1])
        }
        
    }

}





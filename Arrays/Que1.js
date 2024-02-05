// Find Second Smallest and Second Largest Element in an array
let arr = [1, 3, 4, 7, 7, 9, 2];
function secondSmallest(arr) {
  let fSmallest = arr[0];
  let sSmallest = arr[1];
  arr.map((item) => {
    if (item > fSmallest && item < sSmallest) {
      sSmallest = item;
    }
  });
  return sSmallest;
}

function secondLargest(arr) {
  let fLargest = arr[0];
  let sLargest = arr[1];
  arr.map((item) => {
    if (item > fLargest) {
      fLargest = item;
    }
  });
  arr.map((item) => {
    if (item < fLargest && item > sLargest) {
      sLargest = item;
    }
  });
  return sLargest;
}

console.log(secondSmallest(arr));
console.log(secondLargest(arr));

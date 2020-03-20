/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  return quickSort(arr).slice(0,k)
};
function quickSort(arr) {  //快排
  if (arr.length <= 1) return arr
  const [pivot] = arr.splice(Math.floor(arr.length / 2), 1)
  let left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}



var arr = [3,2,1]

console.log(getLeastNumbers(arr, 1))


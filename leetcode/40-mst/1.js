/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a,b) => a -b) 
  return arr.slice(0,k)
};



var arr = [3,2,1]

console.log(getLeastNumbers(arr, 1))


/**
 * 要分成相等的三个部分，总和如果不能被3整除的话，那么肯定为false
 * 找1/3   2/3
 * 前提记录每个的元素的总和
 */
var canThreePartsEqualSum = function(A) {
  let len = A.length
  for (let i = 1; i < len; i++) { //记录总和
    A[i] += A[i-1]
  }
  // console.log(A)
  if (A[len - 1]%3 !== 0) return false
  let val = A[len-1]/3
  let l1 = A.indexOf(val)
  let l2 = A.indexOf(val*2,l1+1)
  if (l1 < l2 && l2 < len -1) return true
  return false
}



var A = [0,2,1,-6,6,-7,9,1,2,0,1]
var A = [0,2,1,-6,6,7,9,-1,2,0,1]
var A = [1,-1,1,-1]
var A = [10,-10,10,-10,10,-10,10,-10]
console.log(canThreePartsEqualSum(A))
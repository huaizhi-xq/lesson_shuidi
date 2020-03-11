/**
 * @param {number[]} A
 * @return {boolean}
 * 暴力法。。。。
 */
var canThreePartsEqualSum = function(A) {
  var temp1 = 0
  for (let i = 0; i < A.length-2; i++) {
    temp1 += A[i]
    let j = i + 1
    var temp2 = 0
    var temp3 = 0
    let m1 = false
    let m2 = false
    while (j < A.length) {  
      if (temp2 != temp1 || !m1) {
        m1 = true
        temp2 += A[j++]
      } else {
        m2 = true
        // console.log(j)
        temp3 += A[j++]
      }
    }
    console.log(temp1,temp2,temp3)
    if (temp1 == temp2 && m1 && m2) {
      if (temp2 == temp3) {
        return true
      }
    }
    
  }
  
  return false
};


var A = [0,2,1,-6,6,-7,9,1,2,0,1]
var A = [0,2,1,-6,6,7,9,-1,2,0,1]
var A = [1,-1,1,-1]
var A = [10,-10,10,-10,10,-10,10,-10]
console.log(canThreePartsEqualSum(A))
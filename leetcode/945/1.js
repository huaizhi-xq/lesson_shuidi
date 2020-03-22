/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  // let res = 0
  // let dp = new Array(A.length).fill(0)
  // for (let i = 1; i < A.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     while (A[i] == A[j]) {
  //       A[i]++
  //       dp[i]++
  //     }
  //     res += dp[i]
  //   }
  // }
  // return res
  A = A.sort((a,b) => a - b)
  // console.log(A)
  let move = 0
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      while (A[i] === A[j]) {
        A[i]++
        move++
      }
    }
  }
  return move
};

var A = [1,2,2]
// var A = [3,2,1,2,1,7]
console.log(minIncrementForUnique(A))

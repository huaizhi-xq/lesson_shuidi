var minIncrementForUnique = function(A) {
  let move = 0
  A = A.sort((a,b) => a - b)
  for (let i = 1; i < A.length; i++) {
    while (A[i] <= A[i-1]) {
      A[i]++
      move++
    }
  }
  return move
}


var A = [1,2,2]
var A = [3,2,1,2,1,7]
console.log(minIncrementForUnique(A))
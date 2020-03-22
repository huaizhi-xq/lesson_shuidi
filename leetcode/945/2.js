var minIncrementForUnique = function(A) {
  A = A.sort((a,b) => a - b)
  let res = []
  let move = 0
  res.push(A[0])
  for (let i = 1; i < A.length; i++) {
    if (A[i] > res[i-1]) {
      res.push(A[i])
    } else {
      while (A[i] <= res[i - 1]) {
        A[i]++
        move++
      }
      res.push(A[i])
    }
  }
  return move
}

var A = [1,2,2]
// var A = [3,2,1,2,1,7]
console.log(minIncrementForUnique(A))
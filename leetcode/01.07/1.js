/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length 
  if (len === 0) return []
  let copy = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // matrix[i][j] = copy[j][len-1-i]  
      matrix[j][len-1-i] = copy[i][j]
    }
  }
};

var matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

rotate(matrix)
console.log(matrix)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let res = 0
  if (matrix.length === 0) return 0
  const row = matrix.length, col = matrix[0].length
  let dp = new Array(row).fill(0).map(() => new Array(col).fill(0))
  for (let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if (matrix[i][j] === 1) {
        if (i > 0 && j > 0) {
          dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
          res = Math.max(res,dp[i][j])
        } else {
          dp[i][j] = 1
          res = Math.max(res,dp[i][j])
        }
      }
    }
  }
  return res * res
};
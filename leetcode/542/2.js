/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  let rows = matrix.length, cols = matrix[0].length
  let dp = new Array(rows).fill(Infinity).map(() => new Array(cols).fill(Infinity))

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) dp[r][c] = 0
      else {
        if (r > 0) dp[r][c] = Math.min(dp[r][c],dp[r-1][c]+1)
        if (c > 0) dp[r][c] = Math.min(dp[r][c],dp[r][c-1]+1)
      }
    }
  }

  for (let r = rows-1; r >= 0; r--) {
    for (let c = cols-1; c >= 0; c--) {
      if (r < rows-1) dp[r][c] = Math.min(dp[r][c], dp[r+1][c]+1)
      if (c < cols-1) dp[r][c] = Math.min(dp[r][c], dp[r][c+1]+1)
    }
  }
  return dp
};
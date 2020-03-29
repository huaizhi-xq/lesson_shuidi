/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const len = grid.length
  let res = []
  let max = -1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === 1) {
        res.push([i,j])
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === 0) {
        max = Math.max(max, distance(res, i,j))
      }
    }
  }
  
  return max
};
var distance = function(res,a,b) {
  if (res.length == 0) return -1
  let n = Math.abs(a-res[0][0]) + Math.abs(b-res[0][1])
  res.forEach(item => {
    n = Math.min(n,Math.abs(a-item[0]) + Math.abs(b-item[1]))
  })
  return n
}


var grid = [[1,0,1],[0,0,0],[0,0,0]]
var grid = [[1,0,0],[0,0,0],[0,0,0]]

console.log(maxDistance(grid))





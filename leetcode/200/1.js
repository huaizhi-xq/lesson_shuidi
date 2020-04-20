/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let len1 = grid.length
  if (len1 === 0) return 0
  let len2 = grid[0].length

  let res = 0

  const helper = function(i,j) {
    // if (grid[i][j] === '0') return
    grid[i][j] = '0'
    const way = [
      [-1,0],[0,1],[1,0],[0,-1]
    ]
    way.forEach(([x,y]) => {
      if (x+i >= 0 && x+i <len1 && y+j >= 0 && y+j < len2) {
        if (grid[i+x][j+y] === '1') {
          helper(i+x,j+y)
        }
      }
    })
  }

  for (let i = 0; i <len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (grid[i][j] === '1') {
        helper(i,j)
        res++
      }
    }
  }
  
  
  return res
};

var grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
var grid = [["1","1","1"],["0","1","0"],["1","1","1"]]
console.log(numIslands(grid))
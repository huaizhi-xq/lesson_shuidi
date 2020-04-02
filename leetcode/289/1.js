/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const m = board.length
  const n = board[0].length
  let res = [...board.map(i=>i.slice())]
  const live = function(i,j) {
    let count = 0
    // 方向数组？
    const way = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    way.forEach(([x,y]) => {
      if (i+x < m && i+x > -1 && j+y < n && j+y > -1) {
        if (res[i+x][j+y] == 1) count++
      }
    })
    if (count < 2) {
      return 0
    } else if (count < 4) {
      return 1
    } else {
      return 0
    }
  }
  
  const dead = function(i,j) {
    let count = 0
    // 方向数组？
    const way = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    way.forEach(([x,y]) => {
      if (i+x < m && i+x > -1 && j+y < n && j+y > -1) { 
        if (res[i+x][j+y] == 1) {
          count++
        }
      }
    })
    
    if (count == 3) {
      return 1
    }
    return 0
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = res[i][j] == 0 ? dead(i,j) : live(i,j)
      
    }
  }
  
  return board
};







const board = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]

console.log(gameOfLife(board))
var gameOfLife = function(board) {
  const m = board.length
  const n = board[0].length

  const liveCount = function(i,j) {
    let count = 0
    // 方向数组？
    const way = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    way.forEach(([x,y]) => {
      if (i+x < m && i+x > -1 && j+y < n && j+y > -1) {
        count += (board[i+x][j+y] & 1)  
      }
    })
    return count
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let num = liveCount(i,j)
      if (board[i][j] === 1) {
        if (num === 2 || num === 3) board[i][j] = 3
      } else if (num === 3) board[i][j] = 2
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1
    }
  }
  return board
}


const board = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]

console.log(gameOfLife(board))
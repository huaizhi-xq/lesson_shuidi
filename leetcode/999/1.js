/**
 * @param {character[][]} board
 * @return {number}
 * 1. 找出R
 */



var numRookCaptures = function(board) {
  let num = 0
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] == 'R') {
        let m = i
        let n = j
        //i-1 上
        while (--m >= 0) {   
          if (board[m][n] == 'B') break
          if (board[m][n] == 'p') {
            num++
            break
          }
        }
        m = i
        //i+1  下
        while (++m < 8) {
          if (board[m][n] == 'B') break
          if (board[m][n] == 'p') {
            num++
            break
          }
        }
        m = i
        //j-1 左
        while (--n >=0) {
          if (board[m][n] == 'B') break
          if (board[m][n] == 'p') {
            num++
            break
          }
        }
        n = j
        //j+1 右
        while (++n < 8) {
          if (board[m][n] == 'B') break
          if (board[m][n] == 'p') {
            num++
            break
          }
        }

        return num
      }
      
    }
  }
};

var board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]

console.log(numRookCaptures(board))
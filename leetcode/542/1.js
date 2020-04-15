/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  let newMatrix = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        helper(i,j)
      }
    }
  }

  const helper = (i,j) => {
    let num = 0
    const way = [
      [-1,0],[1,0],[0,-1],[0,1]
    ]
    for (let item of way) {
      let x = item[0]
      let y = item[1]
      if (x+i >= 0 && x+i <matrix.length && y+j >= 0 && y+j < matrix[i].length) {
        if (matrix[x+i][y+j] === 0) {
          num++
          return num
        }
      }
    }
 
  }

};





var matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
]
updateMatrix(matrix)

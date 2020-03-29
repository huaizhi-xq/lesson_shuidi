var maxDistance = function(grid) {
  const len = grid.length
  let max = -1,
      land = []
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === 1) {
        land.push([i,j])
      }
    }
  }
  if (land.length === 0 || land.length === len*len) return -1
  // 对每一块陆地进行BFS 访问过的格子标记成陆地做一个去重
  while (land.length > 0) {
    let size = land.length
    while(size > 0) {
      size--
      //出列
      let cur = land.shift()

      // 向矩阵的四个方向搜索
      // 终止:越界或者找到一块陆地
      let ways = [ [-1,0], [0,1], [1,0], [0,-1]]
      for (let i = 0; i < 4; i++) {
        let r = cur[0] + ways[i][0],
            c = cur[1] + ways[i][1]

        // 越界 -> 跳过此方向
        if (
          r < 0 || r >= len || c < 0 || c >= len || grid[r][c] ===1
        ) continue

        // 如果找到的是海洋 继续加入到队列中 
        if (grid[r][c] === 0) {
          land.push([r,c])
          grid[r][c] = 1
        }
      }
    }
    max++
  }
  return max
}


var grid = [[1,0,1],[0,0,0],[1,0,1]]
// var grid = [[1,0,0],[0,0,0],[0,0,0]]
// var grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]

console.log(maxDistance(grid))

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  //表面积
    let surfaceAreaAmount = 0
    
    for (let i =  0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        const num = grid[i][j]
        if (!num) {
          continue
        }
        surfaceAreaAmount += 2 + 4 * num
        //左
        if (i-1 >= 0) {
            surfaceAreaAmount -= Math.min(num, grid[i-1][j])
        }
         // 如果下侧有立方体
         if (j - 1 >= 0) {
          // 扣除重叠面积
          surfaceAreaAmount -= Math.min(num, grid[i][j - 1]);
          }
          // 如果右侧有立方体
          if (i + 1 < grid.length) {
              // 扣除重叠面积
              surfaceAreaAmount -= Math.min(num, grid[i + 1][j]);
          }
          // 如果上侧有立方体
          if (j + 1 < grid.length) {
              // 扣除重叠面积
              surfaceAreaAmount -= Math.min(num, grid[i][j + 1]);
          }
      }
    }
    return surfaceAreaAmount
  };
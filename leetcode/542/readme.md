https://leetcode-cn.com/problems/01-matrix/
542. 01 矩阵


 0 1   最近0的距离

BFS 


dp?.  两次dp  状态 距离   周围最小+1
如果matrix[r][c] === 0，那么距离为 0
情况1：水平向左移动 和 竖直向上移动
情况2：水平向右移动 和 竖直向下移动


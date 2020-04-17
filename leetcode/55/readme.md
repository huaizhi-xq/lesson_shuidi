https://leetcode-cn.com/problems/jump-game/
55. 跳跃游戏

跳跃 。。
动态规划？
dp[i] true false



贪心算法定义
是一种在每一步选择中都采取在当前状态下最好或最优(即最有利)的选择，
从而希望导致结果是全局最好或最优的算法

依次遍历(每个节点对应可跳最大距离 == i+nums[i])数组
最大距离大于等于nums的长度时返回true
如果遍历的小标大于最大距离 false
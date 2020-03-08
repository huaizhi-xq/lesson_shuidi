https://leetcode-cn.com/problems/coin-change/


动态规划问题

硬币无限   总金额固定 -> dp方程 -> dp[总金额-面额(每个)]  + 1   min

dp[i] = Math.min(dp[i],dp[i-coin]+1)
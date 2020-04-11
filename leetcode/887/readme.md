https://leetcode-cn.com/problems/super-egg-drop/

887. 鸡蛋掉落
动态规划

K   N

F
状态：dp[i][j] 有i个鸡蛋，j次扔鸡蛋的测得的最多楼层
dp[i][j] = min(dp[i][j], max(dp[i - 1][k - 1], dp[i][j - k]) + 1) ( 1 <= k <= j )

dp[i][j] = dp[i-1][j-1] + dp[i-1][j] + 1

一维优化版：dp[i] = dp[i-1] + dp[i] + 1
dp[i] 表示当前次数下使用i个鸡蛋可以测出的最高楼层


dp[i][j] = dp[i][j-1] + dp[i-1][j-1] + 1





https://leetcode-cn.com/problems/edit-distance/
72. 编辑距离

状态定义
  dp[i][j]表示word1的前i个字母转换成word2的前j个字母所使用的最少操作。

状态转移
  i指向word1 j指向word2
  字母相同  dp[i][j] = dp[i-1][j-1]
  否则 取 增删替 三个操作的最小值+1 dp[i][j] = min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1])+1


  这种两个字符串的，以两个字符串分别作为二维数组的横轴和纵轴，从(0, 0)开始到(len1,len2)模拟一遍二维数组的递推，会很有助于理解～
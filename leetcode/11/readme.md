https://leetcode-cn.com/problems/container-with-most-water/
11. 盛最多水的容器


n  a1-an  (i, ai)   n > 2

动态规划

dp[i] 

i j 

双指针
left 开始位置  right 结束位置  两端
height[left] > height[right]   right--   else left++
每次比较都记录下当前的面积，
求最大面积
https://leetcode-cn.com/problems/subarray-sum-equals-k/

560. 和为K的子数组

和为k   连续

双指针  

负数????


1. 枚举

2. 前缀和 + 哈希表优化
  pre[i]=pre[i−1]+nums[i]
  那么[j..i]子数组   pre[i]−pre[j−1]==k
  pre[j−1]==pre[i]−k

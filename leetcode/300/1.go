func lengthOfLIS(nums []int) int {
	len := len(nums)
ans := 0
if len == 0 {
	return 0
}
if len == 1 {
	return 1
}
dp := make([]int, len)
	dp[0] = 1
for i := 1 ; i < len; i++ {
	max := 1
	for j := 0; j < i; j++ {
		if nums[i] > nums[j] {
			if dp[j] +1 > max {
									max = dp[j] + 1
							}
		}
	}
	dp[i] = max
	if (dp[i] > ans) {
		ans = dp[i]
	}
}
return ans
}
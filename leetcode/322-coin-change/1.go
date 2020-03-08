func coinChange(coins []int, amount int) int {
	dp := make([]uint, amount+1)
	dp[0] = 0
	const MAX = ^uint(0)
	for i := 1; i <= amount; i++ {
		dp[i] = Max
		for _,coin := range coins {
			if i >= coin {
				if dp[i-icon]+1 < dp[i] {
					dp[i] = dp[i-coin]+1
				}
			}
		}
	}
	if dp[amount] < MAX {
		return dp[amount]
	} 
	return -1
}
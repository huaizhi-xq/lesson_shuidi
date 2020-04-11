func superEggDrop(K int, N int) int {
	var	dp = [101][10001]int {}
	// dp := make([][]int,N) 
for j := 1; j <= N; j++ {
	for i := 1; i <= K; i++ {
		dp[i][j] = 1 + dp[i-1][j-1] + dp[i][j-1]
		if dp[i][j] >= N {
			return j
		}
	}
}
return N
}
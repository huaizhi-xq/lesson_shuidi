func maximalSquare(matrix [][]byte) int {
	res := 0
	if len(matrix) == 0 {
		return 0
	}
	row, col := len(matrix), len(matrix[0])
	dp := make([][]int,row)
	for i:=0;i<row;i++{
			dp[i] = make([]int,col)
	}

	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			if matrix[i][j] == '1' {
				if i > 0 && j > 0 {
					dp[i][j] = min(min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1
					res = max(res, dp[i][j])
				} else {
					dp[i][j] = 1
					res = max(res, dp[i][j])
				}
			}
		}
	}
	return res * res
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func max(x,y int) int {
	if x > y {
		return x
	}
	return y
}
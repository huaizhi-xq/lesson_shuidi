func numRookCaptures(board [][]byte) int {
	num := 0
	for i := 0; i < 8; i++ {
		for j := 0; j < 8; j++ {
			if board[i][j] == 'R' {
               
				m := i
				n := j
                m -= 1
				for m >= 0 {
					if board[m][n] == 'B' {
						break
					}
					if board[m][n] == 'p' {
						num++
						break
					}
                    m -= 1
				}
				m = i+1
				for m < 8 {
					if board[m][n] == 'B' {
						break
					}
					if board[m][n] == 'p' {
						num++
						break
					}
                    m += 1
				}
				m = i
                n -= 1
				for n >= 0 {
					if board[m][n] == 'B' {
						break
					}
					if board[m][n] == 'p' {
						num++
						break
					}
                    n -= 1
				}
				n = j +1
				for n < 8 {
					if board[m][n] == 'B' {
						break
					}
					if board[m][n] == 'p' {
						num++
						break
					}
                    n += 1
				}
				return num
			}
		}
	}
    return 0
}
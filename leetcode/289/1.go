func gameOfLife(board [][]int)  {
	m := len(board)
	n := len(board[0])

	var liveCount = func(i, j int ) int {
		count := 0
		var way = [8][2]int{{-1,-1},{-1,0},{-1,1},{0,1},{1,1},{1,0},{1,-1},{0,-1}}
		for _,v := range way {
			t1 := i+v[0]
			t2 := j+v[1]
			if t1 < m && t1 > -1 && t2 < n && t2 > -1 {
				count += (board[t1][t2] & 1)
			}
		}
		return count
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			num := liveCount(i,j)
			if board[i][j] == 1 {
				if num == 2 || num == 3 {
					board[i][j] = 3
				}
			} else if num == 3 {
				board[i][j] = 2
			}
		}
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			board[i][j] >>= 1
		}
	}
	// return board
}
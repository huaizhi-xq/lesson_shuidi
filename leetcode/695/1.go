func maxAreaOfIsland(grid [][]int) int {
	max := 0
	var area func(i,j int) int
area = func(i,j int) int {
	if grid[i][j] == 0 {
		return 0
	}
	count := 1
	grid[i][j] = 0
	if i+1 < len(grid) && grid[i+1][j] == 1 {
					
		count += area(i+1,j)
					
		grid[i+1][j] = 0
	}
	if i-1 >= 0 && grid[i-1][j] == 1 {
		count += area(i-1, j)
		grid[i-1][j] = 0
	}
	if j+1 < len(grid[i]) && grid[i][j+1] == 1 {
		count += area(i,j+1)
		grid[i][j+1] = 0
	}
	if j-1 >= 0 && grid[i][j-1] == 1 {
		count += area(i,j-1)
		grid[i][j-1] = 0
	}
	return count
}
for i:= 0; i < len(grid); i++ {
	for j := 0; j < len(grid[i]); j++ {
		if grid[i][j] == 1 {
							n := area(i,j)
			if n > max {          
				max = n
			}
		}
	} 
}
return max      
}
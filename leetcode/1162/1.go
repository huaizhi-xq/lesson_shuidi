type point struct {
	x int 
	y int
}
func maxDistance(grid [][]int) int {
	l := len(grid)
	var (
		count int
		land = []*point {}
	)
	for i := 0; i < l; i++ {
		for j := 0; j < l; j++ {
			if grid[i][j] == 1 {
				land = append(land, &point{x:i,y:j})
			}
		}
	}
	if len(land) == 0 || len(land) == l*l {
		return -1
	}

	for len(land) != 0 {
		count++
		temp := land
		land = []*point {}
		for _,v := range temp {
			i := val.x
			j := val.y
			if i-1 >= 0 && grid[i-1][j] == 0 {
				grid[i-1][j] = 1
				land = append(land,&point{x:i-1,y:j})
			}
			if i+1<len(grid) && grid[i+1][j] == 0 {
					grid[i+1][j] = 1
					land = append(land,&point{x:i+1,y:j})
			}
			if j-1>=0 && grid[i][j-1] == 0 {
					grid[i][j-1] = 1
					land = append(land,&point{x:i,y:j-1})
			}
			if j+1<len(grid[0]) && grid[i][j+1] == 0 {
					grid[i][j+1] = 1
					land = append(land,&point{x:i,y:j+1})
			}
		}

	}
	

	return count-1
}
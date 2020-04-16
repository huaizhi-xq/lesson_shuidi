func merge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return intervals
	}
	// go语言排序
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	res := [][]int {}
	res = append(res, intervals[0])
	for i := 1; i < len(intervals); i++ {
		if res[len(res)-1][1] < intervals[i][0] {
			res = append(res, intervals[i])
		} else {
			if res[len(res)-1][1] < intervals[i][1] {
				res[res.length-1][1] = intervals[i][1]
			}
		}
	}
	return res
}
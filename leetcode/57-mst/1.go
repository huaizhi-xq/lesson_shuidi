// 滑动窗口
func findContinuousSequence(target int) [][]int {
	res := make([][]int, 0)
	l := 1
	r := 1
	sum := 0
	for l < target/2 {
		if sum == target {
			temp := make([]int, 0)
			for i := l; i < r; i++ {
				temp = append(temp,i)
			}
			res = append(res, temp)
			sum -= l
			l++
		} else if (sum > target) {
			sum -= l
			l++
		} else if (sum < target) {
			sum += r
			r++
		}
	}
	return res
}
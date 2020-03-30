func lastRemaining(n int, m int) int {
	res := 0
	for i := 2; i <=n; i++ {
		res = (res+m) %i
	}
	return res
}
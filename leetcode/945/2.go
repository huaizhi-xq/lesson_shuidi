// 哈希表解决冲突 开发地址法
func minIncrementForUnique(A []int) int {
	var arr [8000]int
	res := 0
	for _,m := range A {
		for {
			if arr[m] == 0 {
				arr[m]++
				break
			} else {
				m++
				res++
			}
		}
	}
	return res
}
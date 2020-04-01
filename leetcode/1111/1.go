func maxDepthAfterSplit(seq string) []int {
	res := [10000]int {}
	arr := []byte(seq)
	dep := 0
	for i := 0; i < len(arr); i++ {
		if arr[i] == '(' {
			if dep % 2 != 0 {
				res[i] = 1
			}
			dep++
		} else {
			dep-- 
			if dep % 2 != 0 {
				res[i] = 1
			}
		}
	}
	return res[0:len(arr)]
}
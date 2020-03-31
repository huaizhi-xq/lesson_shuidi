func sortArray(nums []int) []int {
	if len(nums) == 1 {
		return nums
	}
	poivtIndex := nums / 2
	poivt := nums[poivtIndex]
	nums = append(s1[0:poivtIndex],s1[poivtIndex+1:]...)
	left = make([]int)
	right = make([]int)
	for _,v := range nums {
		if v < poivt {
			left = append(left,v)
		} else {
			right = append(right, v)
		}
	}
	return append(sortArray(left),poivt,sortArray(right))
}
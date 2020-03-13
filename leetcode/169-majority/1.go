func majorityElement(nums []int) int {
	cnt := 0
	var candidate int
	for _,v := range  nums {
		if cnt == 0 {
			candidate = v
		}
		if v == candidate {
			cnt += 1
		} else {
			cnt -=1
		}
	}
	return candidate
}
func canJump(nums []int) bool {
	l := len(nums)
	max := 0
	for i := 0; i < l; i++ {
		if i > max {
			return false
		}
		if (i+nums[i] > max) {
			max = i + nums[i]
		}
		if (max >= l - 1) {
			return true
		}
	}
}
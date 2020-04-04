func trap(height []int) int {
	if len(height) < 3 {
		return 0
	}
	count := 0
	left := 0
	right := len(height) -1 
	leftMax := 0
	rightMax := 0

	for left < right {
		if height[left] < height[right] {
			if height[left] >= leftMax {
				leftMax = height[left]
			} else {
				count += leftMax - height[left]
			}
			left++
		} else {
			if (height[right] >= rightMax) {
				rightMax = height[right]
			} else {
				count += rightMax - height[right]
			}
			right--
		}
	}
	return count
}
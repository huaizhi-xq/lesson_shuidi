func maxArea(height []int) int {
	left := 0
	right := len(height)-1
	max := 0
	temp := 0
	for right-left>=1 {
		if height[left] > height[right] {
			temp = height[right]*(right-left)
			right--
		} else {
			temp = height[left]*(right-left)
			left++
		}
		if temp > max {
			max = temp
		}
	}
	return max
}
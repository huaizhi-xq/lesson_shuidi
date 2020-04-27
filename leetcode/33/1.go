func search(nums []int, target int) int {
	size := len(nums)
	if size == 0 {
		return -1
	}
	if nums[0] == target {
		return 0
	} else if nums[0] > target {
		i := size-1
		for i >= 0 && nums[i] >= target {
			if nums[i] == target {
				return i
			}
			i--
		}
		return -1
	} else {
		j := 0
		for j < size && nums[j] <= target {
			if nums[j] == target {
				return j
			}
			j++
		}
		return -1
	}
}
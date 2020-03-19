func twoSum(nums []int, target int) []int {
  m := make(map[int]int,target)
	for i := 0; i < len(nums); i++ {
		key := target - nums[i]
		value,ok := m[key]
		if ok {
			return []int{value,i}
		}
		m[nums[i]] = i
	}
  return nil
}
// 递归 每次拿出一个数，剩下的全排列再加上拿出去的
func permute(nums []int) [][]int {
	if len(nums) == 1 {
		return [][]int{nums}
	}

	res := [][]int{}

	for i, num := range nums {
		// 把num从nums拿出来得到temp
		temp := make([]int, len(nums)-1)
		copy(temp[0:],nums[0:i])
		copy(temp[i:],nums[i+1:])
		// sub是把num拿出去后，数组中剩余数据的全排列
		sub := permute(temp)
		for _,s := range sub {
			res = append(res, append(s,num))
		}
	}
	return res
}
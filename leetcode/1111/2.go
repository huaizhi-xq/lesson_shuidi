func maxDepthAfterSplit(seq string) []int {
	stack := make([]int, 0, len(seq))
	var deep = 0
	for _,v := range seq {
		if string(v) == "(" {
			stack = append(stack, deep%2)
			deep++
		} else {
			deep--
			stack = append(stack, deep%2)
		}
	}
	return stack
}
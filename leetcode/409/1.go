func longestPalindrome(s string) int {
	var dict [123]int
	for _,v := range s {
		dict[v] += 1
	}
	count := 0
	for _,v := range dict {
		count += v / 2 * 2
	}
	if count == len(s) {
		return count
	} else {
		return count + 1
	}
}
func maxProfit(prices []int) int {
	max := 0
	if len(prices) == 0 {
		return max
	}
	l := prices[0]
	r := prices[0]
	for i:= 1; i < len(prices);i++ {
		if prices[i] < l {
			l = prices[i]
			r = prices[i]
		} else {
			if prices[i] > r {
				r = prices[i]
			}
			if	r-l > max {
				max = r-l
			}
		}
	}
	return max
}
// 快速幂 + 迭代
func myPow(x float64, n int) float64 {
	if n >= 0 {
		return quickMul(x,n)
	}
	return 1.0 / quickMul(x, -n)
}

func quickMul(x float64, N int) float64 {
	ans := 1.0
	x_contribute := x
	for N >  0 {
		if N & 1 == 1 {
			ans *= x_contribute
		}
		x_contribute *= x_contribute
		N /= 2
	}
	return ans
}
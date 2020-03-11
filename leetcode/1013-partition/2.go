func canThreePartsEqualSum(A []int) bool {
	sum := 0
	for _, v := range A {
		sum += v
	}
	if sum%3 != 0 {
		return false
	}
	ava := sum / 3
	count := 0
	sum = 0
	for i := 0; i < len(A); i++ {
		sum += A[i]
		if sum == ava {
			count++
			sum = 0
		}
	}
	return count >= 3
}
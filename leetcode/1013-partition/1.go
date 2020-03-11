func canThreePartsEqualSum(A []int) bool {
	len := len(A)
	for i := 1; i < len; i++ {
		A[i] += A[i-1]
	}
	if A[len-1]%3 != 0 {
		return false
	}
	val := A[len-1]/3
	l1 := -1
	for i := 0; i < len; i++ {
		if val == A[i] {
			l1 = i
            break
		}
	}
	l2 := -1
	for i := l1+1; i < len; i++ {
		if val*2 == A[i] {
			l2 = i
            break
		}
	}
	if l1 < l2 && l2 < len -1 {
		return true
	}
	return false
}
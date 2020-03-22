func minIncrementForUnique(A []int) int {
	move := 0
	sort.Ints(A)
	for i := 1; i < len(A); i++ {
		if A[i] <= A[i-1] {
			n := A[i-1] + 1 - A[i]
			A[i] += n
			move += n
		}
	}
	return move
}
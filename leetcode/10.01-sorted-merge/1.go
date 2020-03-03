func merge(A []int, m int, B []int, n int)  {
	C := make([]int, m + n)
	i := m - 1
	j := n - 1
	p := n + m -1

 //  const MaxUint = ^uint(0)
	 const INT_MAX = int(^uint(0) >> 1)
	 const INT_MIN = ^INT_MAX

	for i >= 0 || j >= 0 {
	 // var a = -MaxUint
			 a := INT_MIN
	 if i >= 0 {
		 a = A[i]
	 }
	 //  b = j >= 0 ? B[i] : -MaxUint  没有三元运算符
	 // var b = -MaxUint
			 b := INT_MIN
	 if j >= 0 {
		 b = B[j]
	 }

		if (a > b) {
		 C[p] = a
		 i--
		} else {
			C[p] = b
			j--
		}
		p--
	}
		copy(A,C)
}
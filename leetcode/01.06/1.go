func compressString(S string) string {
	n := len(S)
	if n < 3 {
		return S
	}
	res := make([]byte,0,n)
	t := 0
	res = append(res, S[0])
	for i := 1; i < n; i++ {
		if S[i] != S[i-1] {
			res = append(res, []byte(strconv.Itoa(i-t))...)
			t = i
			res = append(res, S[i])
		}
		if i == n - 1 {
			res = append(res, []byte(strconv.Itoa(i+1-t))...)
		}
	}
	if len(res) < n {
		return string(res)
	}
	return S
}
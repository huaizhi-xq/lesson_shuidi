func minimumLengthEncoding(words []string) int {
	tmp := make(map[string]int, 0)
	for _, value := range words {
		if _,ok := tmp[value]; !ok {
			tmp[value] = 1
		}
	}

	for _, value :=range words {
		for i := 1; i < len(value); i++ {
			delete(tmp, value[i:])
		}
	}

	res := 0

	for key,_ := range tmp {
		res += len(key) +1
	}
	return res
}
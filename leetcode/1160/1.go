func countCharacters(words []string, chars string) int {
	m := make(map[byte]int)
	cnt := 0
	for _,w := range words {
		for c := range chars {
			m[chars[c]]++
		}
		if check(w, m) {
			cnt += len(w)
		}
	}
	return cnt
}

func check (w string, m map[byte]int) bool {
    
	for i := range w {
		value,ok := m[w[i]]
		if ok && value > 0 {
			m[w[i]]--
		} else {
			return false
		}
	}
 
	return true
}


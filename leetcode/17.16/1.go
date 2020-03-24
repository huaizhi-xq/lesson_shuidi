func message (nums int[]) int {
	a := 0
	b := 0
	for _,v := range nums {
		c = a +v
		if b > c {
			c = b
		}
		a = b
		b = c
	}
}
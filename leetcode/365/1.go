func canMeasureWater(x int, y int, z int) bool {
	if x + y < z {
	return false
}
if x == 0 || y == 0 {
	return z == 0 || x + y == z
}
var gcd func(a, b int) int
gcd = func(a, b int) int{
	if b == 0 {
		return a
	}
	return gcd(b, a % b)
}
return z % gcd(x,y) == 0
}
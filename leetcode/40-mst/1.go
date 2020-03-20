func getLeastNumbers(arr []int, k int) []int {
	// if k >= len(arr) {
	// 	return arr
	// }
	// var recur func(arr int[], k int) []int {
	// 	s,e := 0, len(arr)-1
	// 	c := arr[s]
	// 	for s < e {
	// 		for s < e {
	// 			if arr[s] > c {
	// 				break
	// 			}
	// 			s++
	// 		}
	// 		for e > s {

	// 		}
	// 	}
	// }
	sort.Ints(arr[:])
	return arr[0:k]
}
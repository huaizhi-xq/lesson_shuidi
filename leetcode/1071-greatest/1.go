func gcdOfStrings(str1 string, str2 string) string {
	if str1+str2 != str2+ str1 {
		return ""
	}
	for { // 6 4 = 2   2 4 2 2 
		n := len(str1) - len(str2)
		if n==0 {
			return str1
		} else if n > 0{
			str1 = str1[len(str2):len(str1)]
		} else {
			str2 = str2[len(str1):len(str2)]
		}
	}
}
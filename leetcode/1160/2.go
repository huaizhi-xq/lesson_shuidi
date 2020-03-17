func countCharacters(words []string, chars string) int {
	var wholeLength int = 0
	outloop: for _,v1 := range words {  //单词
		for _, v2 := range v1 { //字母
			if strings.Count(v1, string(v2)) > strings.Count(chars, string(v2)) {
				//单词中某个字母数量大于词库中数量
				continue outloop
			}
		}
		wholeLength += len(v1)
	}
	return wholeLength
}
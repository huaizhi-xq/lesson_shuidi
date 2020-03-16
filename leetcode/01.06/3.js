//双指针法
var compressString = function(S) {
  let res = ''
  let i = 0, j = 0
  while (j < S.length -1) {
    if (S[j] !== S[j+1]) {
      res += S[i] + (j+1-i)
      i = j+1
    }
    j++
  }
  res += S[i] + (j + 1 - i)
  return res.length < S.length ? res : S
}


var S = "aabcccccaaa"
// var S = "abbccd"
// var S = "ccc"
console.log(compressString(S))
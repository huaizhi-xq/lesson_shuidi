//正则
var compressString = function(S) {
  let res = ''
  let sReg = S.match(/([A-z])\1*/g)
  console.log(sReg)
  if (sReg) {
    sReg.forEach(item => {
      res += item[0] + item.length
    })
  }
  return res.length < S.length ? res : S
}


var S = "aabcccccaaa"
// var S = "abbccd"
// var S = "ccc"
console.log(compressString(S))
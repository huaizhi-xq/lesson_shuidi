/**
 * @param {string} S
 * @return {string}
 */
// var compressString = function(S) {
//   let len = S.length
//   if (len < 2) return S
//   S[len] = -1
//   let res = []
//   res.push(S[0])
//   let t = 0
//   for (let i = 1; i < len+1; i++) {
//     if (S[i] !== res[res.length-1]) {
//         res.push(i - t)
//         t = i
//         res.push(S[i])
//     }
//   }
//   res.pop()
//   console.log(res)
//   return res.length < len ? res.join('') : S
// };

var compressString = function(S) {
  let len = S.length
  if (len < 3) return S
  let res = ''
  res += S[0]
  let t = 0
  for (var i = 1; i < len; i++) {
    if (S[i] !== S[i-1]) {
        res += (i-t)
        t = i
        res += S[i]
    }
  }
  res += (i-t)
  
  return res.length < len ? res : S
};


var S = "aabcccccaaa"
// var S = "abbccd"
// var S = "ccc"
console.log(compressString(S))
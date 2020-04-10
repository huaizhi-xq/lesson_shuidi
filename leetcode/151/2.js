var reverseWords = function(s) {
  let stack = []
  let temp = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      temp += s[i]
    } else {
      if (temp.length > 0 ) {
        stack.push(temp)
        temp = ''
      }
    }
    if (i === s.length-1) {
      if (temp.length > 0 ) {
        stack.push(temp)
      }
    }
  }
  let res = ''
  while (stack.length) {
    res += stack.pop() + ' '
  }
  return res.slice(0,res.length-1)
}


var s = "  the sky is    blue"

console.log(reverseWords(s))
var longestPalindrome = function(s) {
  const arr = s.split('')
  const temp = {}
  let count = 0
  arr.forEach(item => {
    if (temp[item]) {
      count += 2
      temp[item] = undefined  //关键
    } else {
      temp[item] = 1
    }
  })
  const keys = Object.keys(temp)
  if(keys.some(key => temp[key] === 1)) {
    console.log('+++')
    count += 1
  }
  return count
}

// var s = "abccccdd"
var s = "ccac"
// var s = " bb"
console.log(longestPalindrome(s))
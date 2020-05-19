/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, flag = true) {
  let left = 0, right = s.length -1
  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else if (flag){  //两种情况，删除左或右   0   2       123      1  3    0  2
      // validPalindrome(s.slice(left+1,right+1))  //左
      // validPalindrome(s.slice(left,right)) //右
      return validPalindrome(s.slice(left+1,right+1), false) || validPalindrome(s.slice(left,right), false)
    } else {
      return false
    }
  }
  if (left >= right) {
    return true
  }
  return false
};

console.log(validPalindrome("ba"))
/**
 * 记录数量的变量来代替栈
 * 从左到右扫描，用两个变量 left 和 right 保存的当前的左括号和右括号的个数，都初始化为 0
 *  1. 如果左括号个数等于右括号个数了，那么就更新合法序列的最长长度。
 *  2. 如果左括号个数大于右括号个数了，那么就接着向右边扫描。
 *  3. 如果左括号个数小于右括号个数了，那么就一定不是合法序列，令left rigth = 0，接着扫描
 *然后再从右至左扫描一遍((())  因为这种情况left>right  
 *
 */
var longestValidParentheses = function(s) { 
  var left = 0, right = 0, maxlength = 0;
  for (let i in s) {
    if (s[i] == '(') {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      maxlength = Math.max(maxlength, 2*right)
    } else if (right > left) {
      left = right = 0;
    }
  }
  left = right = 0;
  // 从右至左扫描   ( ( ( ) )这样的情况不会出现left == right
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] == '(') {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      maxlength = Math.max(maxlength, 2*left)
    } else if (left >= right) {
      left = right = 0; 
    }
  }

  return maxlength
}

console.log(longestValidParentheses("()(())"))
console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("(()"))
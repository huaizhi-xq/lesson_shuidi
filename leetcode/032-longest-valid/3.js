// 动态规划  通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法
// 1. 初始化所有dp为0
// 2. 以左括号结尾的字符串一定非法，dp不用改
// 3. 以右括号结尾的字符串分两种情况
//    1. 右括号前边是左括号()()
//        dp[i] = dp[i-2] + 2
//    2. 右括号前边是右括号，并且前边的合法序列的前边是左括号(如果是右括号那么就为0)
//        dp[i] = dp[i-1] + dp[i - dp[i-1] - 1 - 1] + 2
// 时间复杂度O(n) 空间复杂度O(n)
var longestValidParentheses = function(s) { 
  var maxans = 0
  const dp = new Array(s.length).fill(0)
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) == ')') {  //s[i]
      // 右括号前边是左括号
      if (s.charAt(i-1) == '(') {
        // i >= 2 () 这种情况 i为1
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
      // 右括号前边是右括号，并且前边的合法序列的前边是左括号
      } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) == '(') {
        // i >= 2 这种情况(())
        dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[(i - dp[i - 1] - 2)] : 0) + 2;
      }
      maxans = Math.max(maxans, dp[i]);
    }
  }
  return maxans
}

// const dp = new Array(7).fill(0)
// console.log(dp[9])

console.log(longestValidParentheses("()(())"))
console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("((()))())"))


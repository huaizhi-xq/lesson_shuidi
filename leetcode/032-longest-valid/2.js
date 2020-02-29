// 暴力解法
// 从第一个字符开始循坏，找合法子串
// 用一个变量记录括号情况 左+1 右-1  变量为0 就更新合法子串
// 时间复杂度O(n^2) 空间复杂度O(1)
var longestValidParentheses = function(s) {
  var count = 0;
  var max = 0;

  for (let i in s) {
    count = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] == '(') {
        count++;
      } else {
        count--;
      }
      //  右括号多了  一定是非法
      if (count < 0) break;
  
      // 合法序列 更新最长长度
      if (count == 0) {
        if (j - i + 1 > max) {
          max = j - i + 1;
        }
      }
    }
  }

  return max;
}

console.log(longestValidParentheses("()(())"))
console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("(()"))
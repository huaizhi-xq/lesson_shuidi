/**
 * 使用栈  先将-1入栈  计算
 * 遍历字符串
 * 1. 扫描到左括号，就将当前位置入栈
 * 2. 扫描到右括号，就将栈顶出栈(匹配),然后分两种情况
 *    1. 栈空，说明之前没有匹配的，那么就将当前位置入栈
 *    2. 栈不空，就用当前位置减去栈顶存放的位置得到合法序列的长度，更新maxans
 * 
 * 时间复杂度O(n)  空间复杂度O(n)
 */
var longestValidParentheses = function(s) { 
  var maxans = 0;
  var stack = []
  stack.push(-1);
  for (let i in s) {
    if (s[i] == '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length == 0) {
        stack.push(i);
      } else {
        maxans = Math.max(maxans, i - stack[stack.length - 1]);
      }
    }
  }
  return maxans
}

console.log(longestValidParentheses("()(())"))
console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("(()"))
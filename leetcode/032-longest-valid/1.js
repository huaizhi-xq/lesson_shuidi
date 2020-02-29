
var longestValidParentheses = function(s) {
  if (s.length == 0) return 0;

  var max = 0;

  var stack = [];

  var flag = 0;

  for (let i in s) {
    const temp = s[i];
    if (temp == '(') {
      stack.push(temp);
    } else {
     stack.pop()

      if (stack.length == 0) {
        stack.push(i)
      } else {
        
      }
    }
  }
  return max;
};

console.log(longestValidParentheses("((()))"))
// console.log(longestValidParentheses("()(()"))
// console.log(longestValidParentheses(")()())"))
// console.log(longestValidParentheses("(()"))
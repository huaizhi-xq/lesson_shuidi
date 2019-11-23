 var isValid = function(s) {
  let vaild = true;
  const stack = [];  //用栈
  const mapper = {  
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (let i in str) {
    const temp = s[i];
    if (['{','[','('].indexOf(temp) > -1) { //如果是括号的左边就入栈
      stack.push(temp);
    } else {
      const tempRight = stack.pop();     //取出栈顶元素
      if (temp !== mapper[tempRight]) { //括号左右不匹配
        return false;
      }
    } 
  }
  if (stack.length > 0) return false;

  return vaild;
};
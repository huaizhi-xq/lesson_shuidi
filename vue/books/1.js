var s1 = 'get-element-by-id'

// 编写一个函数  getElementById  codewars

function a(s1) {
  // s1.replace(/-$/g)
  return s1.replace(/-\w/g, function(x) {
    // - 不要 第二个字符变大写
    // return x[1].toUpperCase();
    // return x.slice(1).toUpperCase();
    return x.charAt(1).toUpperCase();
  })
}

console.log(a(s1))
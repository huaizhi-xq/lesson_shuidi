/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 超时。。。。。
 */
var myPow = function(x, n) {
  if (n === 0 ) return 1
  if (n === 1 ) return x
  const temp = x
  if (n > 0) {
    for (let i = 1; i < n; i++) {
      x = x*temp
    }
  } else {
    n = -n
    x = 1 / x
    for (let i = 1; i < n; i++) {
      x = x * (1 / temp)
    }
  }

  return x
};
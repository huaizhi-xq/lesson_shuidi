/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
//0 1 2 3 4
var lastRemaining = function(n, m) {
  let res = 0
  for (let i = 2; i <= n; i++) {
    res = (m+res) %i     // 1  1 
  }
  return res
};


console.log(lastRemaining(2,3))
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  if (k === 0) return 1
  let res = 0
  for (let i = 0; i < m; i++) {
    let flag = false
    for (let j = 0; j < n; j++) {
      if (i > 9 || j > 9) {
        let t1 = i % 10,
          t2 = parseInt(i / 10)
          t3 = j % 10
          t4 = parseInt(j / 10)
        if (t1+t2+t3+t4 <= k) {
          // console.log(i,j)
          res++
          flag = true
          continue
        } else {
          break
        }
      }
      if (i + j <= k) {
        // console.log(i,j)
        res++
        flag = true
      } else {
        break
      }
    }
    
    if (!flag) {
      return res
    }
  }
  return res
};


// console.log(8%10)
// console.log(parseInt(8/10))

console.log(movingCount(38,15,9))
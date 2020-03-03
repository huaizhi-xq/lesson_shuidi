/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  if (n == 0) return A

  let i = m - 1, j = n - 1, p = n + m - 1
  var C = []
  while (i >= 0 || j >= 0) {
    let a = i >= 0 ? A[i] : -Infinity,
        b = j >= 0 ? B[j] : -Infinity

    if (a > b) {
      C[p] = a
      i--
    } else {
      C[p] = b
      j--
    }
    p--;
  }

  return C
};



var A = [1,2,3]
var B = [2,4,6]

console.log(merge(A,3,B,3))

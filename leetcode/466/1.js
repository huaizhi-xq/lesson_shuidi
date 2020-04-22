/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 * 
 * 
 * 超时？？？
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  let S1 = ''
  while (n1 > 0) {
    S1 += s1
    n1--
  }
  let S2 = ''
  while (n2 > 0) {
    S2 += s2
    n2--
  }
  let j = 0
  let num = 0
  for (let i = 0; i < S1.length; i++) {
    if (S1[i] === S2[j]) {
      j++
    }
    if (j >= S2.length) {
      j = 0
      num++
    }
  }

  return num

};
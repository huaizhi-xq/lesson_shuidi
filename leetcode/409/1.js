/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (len === 0) return 0
  var dp = new Array(len).fill(1)
  let max = 1
  for (let i = 1; i < len; i++) {
    let n = 0
    for (let j = i-1; j >= 0; j--) {
      if (s[i] == s[j]) {
        n++
      }
     
    }
    if (n % 2 === 1 && n > 0) {
      // console.log(s[i])
      // dp[i] = dp[i-1] + 2
      s[i].length % 2 !== 0 ? dp[i] = dp[i-1] + 2 : dp[i] = dp[i-1] +1
      
    } else{
      dp[i] = dp[i-1]
    }
    max = Math.max(max, dp[i])
  }
  return max
};



// var s = "abccccdd"
var s = "cccc"
// var s = " bb"
console.log(longestPalindrome(s))

// console.log(3%2 == 1)
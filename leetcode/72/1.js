/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length,
    len2 = word2.length

  let dp = new Array(len1+1).fill(0).map(() => new Array(len2+1).fill(0))
  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= len1; j++) {
    dp[0][j] = j
  }

  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i*j) {
        dp[i][j] = word1[i-1] == word2[j-1] ? dp[i-1][j-1] : (Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1)
      } else {
        dp[i][j] = i + j
      }
    }
  }
  return dp[len1][len2]
};


var word1 = "asd"
var word2 = "asd"
minDistance(word1, word2)
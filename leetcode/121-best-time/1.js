/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  var dp = new Array(len+1).fill(0)
  var max = 0
  prices.unshift(Infinity);
  for (let i = 1; i <= len; i++) {
    let j = i;
    while (j >= 1) {
      if (prices[i] > prices[j]) {   
        dp[i] = Math.max(dp[i],prices[i]-prices[j])
        max = Math.max(max,dp[i])
      }
      j--;
    }
  }
  return max;
};

// var prices = [7,1,5,3,6,4]
var prices = [7,6,4,3,1]

console.log(maxProfit(prices))
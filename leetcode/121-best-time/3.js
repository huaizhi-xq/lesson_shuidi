/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  max = 0
  if  (len == 0) return max
  let l = 0
  let r = 0
  l = prices[0]
  r = prices[0]
  for (let i = 1; i < len; i++) {
    if (prices[i] < l) {
      l = prices[i]
      r = prices[i]
    } else {
      if (prices[i] > r)
        r = prices[i]
      max = Math.max(max,r-l)
    }
  }
  return max
};

var prices = [7,1,5,3,6,4]
// var prices = [7,6,4,3,1]
// var prices = [2,4,1]

console.log(maxProfit(prices))
/**
 * 
 * 优化 用变量来存储dp[i-1]和dp[i-2] 空间复杂度减小为O(1) 
 */
var massage = function(nums) {
  let a = 0, b = 0
  for (let i = 0; i < nums.length; i++) {
    let c = Math.max(b, a + nums[i])
    a = b
    b = c
  }
  return b
}
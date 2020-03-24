/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  const len = nums.length
  if (len == 0) return 0
  if (len == 1) return nums[0]
  var dp = new Array(len)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++){
    if (dp[i-2] + nums[i] > dp[i-1]) {
      dp[i] = dp[i-2] + nums[i]
    } else {
      dp[i] = dp[i-1]
    }
  }
  return dp[len-1]
  // [3,2,1,1]
  // let i = 0, j = 1
  // let l = 0, r = 0
  // while (i < len) {
  //   l += nums[i]
  //   i += 2
  // }
  // while (j < len) {
  //   r += nums[j]
  //   j += 2
  // }
  // console.log(l, r)
  // return l > r ? l : r
};

var nums =  [1,2,3,1]
var nums =  [2,1,4,5,3,1,1,3]
console.log(massage(nums))
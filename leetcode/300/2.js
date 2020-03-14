var lengthOfLIS = function(nums) {
  let  n = nums.length, ans = 0
  if (n == 0) return 0
  if (n == 1) return 1
  let dp = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    let max = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(dp[j]+1, max)
      } 
    }
    dp[i] = max
    ans = Math.max(dp[i], ans)
  }
  return ans
};

var nums = [1,3,6,7,9,4,10,5,6]
console.log(lengthOfLIS(nums))
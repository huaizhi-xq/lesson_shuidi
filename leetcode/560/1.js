/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//   let len = nums.length
//   if (len === 1 && nums[0] === k) return 1 
//   let i = 0, j = 1, res = 0
//   let sum = nums[0] + nums[1]
//   while (j < len-1) {
//     if (sum < k) {
//       sum += nums[++j]
//     } else {
//       if (sum === k) res++
//       sum -= nums[i++]
//     }
//   }
//   while (i < len-1) {
//     sum -= nums[i++]
//     console.log(sum, i)
//     if (sum === k) res++
//   }
//   return res
// };
// 枚举    O(n^2)  O(1)
var subarraySum = function(nums, k) {
  let res = 0,  len = nums.length
  for (let i = 0; i < len; i++) {
    let sum = 0
    for (let j = i; j >= 0; j--) {
      sum += nums[j]
      if (sum === k) {
        res++
      }
    }
  }
  return res
}

var nums = [1,1,1,1], k = 2
console.log(subarraySum(nums, k))
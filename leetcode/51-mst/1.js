/**
 * @param {number[]} nums
 * @return {number}
 * 超时。。。。
 */
var reversePairs = function(nums) {
  let len = nums.length
  if (len <= 1) return 0  
  let left = 0, right = 1,res = 0
  while (left < len-1) {
    while (right < len ) {
      if (nums[left] > nums[right]) {
        res++
      }
      right++
    }
    left++
    right = left+1
  }
  return res
};


console.log(reversePairs([7,5,6,4]))
console.log(reversePairs([2,3,1]))
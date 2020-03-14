/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length == 0) return 0
  let max = 1
  for (let i = 0; i < nums.length; i++) {
    let count = 1
    let temp = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (temp < nums[j]) {
        count++
        temp = nums[j]
        max = Math.max(max, count)

      } else if (nums[j] > nums[i]){
        temp = nums[j]
        
      }
    }
  }
  return max
};



var nums = [1,3,6,7,9,4,10,5,6]
console.log(lengthOfLIS(nums))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * log n
 */
var search = function(nums, target) {
  let len = nums.length
  if (nums[0] === target) {
    return 0
  } else if (nums[0] > target) {
    let i = len-1
    while (i >= 0 && nums[i] >= target) {
      if (nums[i--] === target) return i+1    
    } 
    return -1
  } else {
    let i  = 0
    while (i < len && nums[i] <= target) {
      if (nums[i++] === target) return i-1
    }
    return -1
  }
};
var nums = [4,5,6,7,0,1,2], target = 0
console.log(search(nums,0))

// return nums.findIndex(item => item === target)
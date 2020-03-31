/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length <= 1) return nums
  let pivotIndex = Math.floor(nums.length / 2)
  let pivot = nums.splice(pivotIndex,1)[0]
  let left = []
  let right = []
  nums.forEach(item => {
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })
  return sortArray(left).concat([pivot],sortArray(right))
};
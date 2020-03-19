var singleNumber = function(nums) {
  let res = 0
  for (num of nums) {
    res ^= num
  }
  return res
}
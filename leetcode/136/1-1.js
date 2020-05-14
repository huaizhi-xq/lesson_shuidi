/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   let len = nums.length
//   if (len === 1) return nums[0]
//   nums.sort((a,b) => a-b) 

//   for (let i = 0; i < len; i++) {
//     if (nums[i] !== nums[i+1]) {
//       return nums[i]
//     }
//     i++
//   }
//   return num[len-1]
// };

var singleNumber = function(nums) {
  let res = 0;    //
  for (let num of nums) {
    res ^= num
  }
  return res
}



console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
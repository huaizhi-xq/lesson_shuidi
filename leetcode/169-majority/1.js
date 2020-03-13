/**
 * @param {number[]} nums
 * @return {number}
 * 排序
 */
// var majorityElement = function(nums) {
//   nums.sort((a,b)=>a-b);
//   return nums[Math.floor(nums.length/2)]
// };

//boyer-moore 投票算法    遍历数组  是+1 不是-1 cnt=0 投
var majorityElement = function(nums) {
  let candidate = []
  let cnt = 0
  for (let i = 0; i < nums.length; i++) {
    if (cnt === 0) {
      candidate = nums[i]     //3 
    }
    cnt += (nums[i] == candidate)? 1 : -1  //3 == 3  cut = 1  
  }
  return candidate
}

// hash
// var majorityElement = function(nums) {
//   let map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i])+1)
//     } else {
//       map.set(nums[i], 1)
//     }
//   }
//   for (let item of map.entries()) {
//     if (item[1] > nums.length/2) {
//       return item[0]
//     }
//   }
// }



var nums = [2,1,3,3,1,1,1]
console.log(majorityElement(nums))
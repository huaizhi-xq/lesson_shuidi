// 两数之和   散列表 
// 两重循环 暴力解决
//

var twoSum = function(nums, target) {
    // let m = new Map()
    // for (let i = 0; i <nums.length; i++) {
    //   m.set(nums[i],i)
    // }
    // console.log(m)
    // for (let j = 0; j < nums.length; j++) {
    //   let n = target - nums[j]  
    //   // console.log(n, m.has(n)) 
    //   m.has(nums[j])
    //   if (m.has(n) ) {
    //     return [j, m.get(n)]
    //   }
    // }
    let targetMap = new Map()
    for (let i = 0; i < nums.length; i++) {
      const key = target - nums[i]
      if (targetMap.has(key)) {
        return [targetMap.get(key), i]
      }
      targetMap.set(nums[i], i) 
    }

};

var nums = [3,2,4], target = 6
console.log(twoSum(nums, target))
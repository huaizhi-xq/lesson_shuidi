/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法 复杂度n^2
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length;i++){
        var dif = target - nums[i];
        for(var j = i + 1; j<nums.length;j++){
            if(dif == nums[j]){
                return [i,j]
            }
        }
    }
};
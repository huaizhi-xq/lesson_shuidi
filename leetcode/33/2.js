var search = function(nums, target) {
  let low = 0, high = nums.length

  while (low <high) {
    var mid = (low+high)>>1;
    // 异或运算  三个真或一个真时  为真
    if( (nums[0] > nums[mid]) ^ (target > nums[mid]) ^ (target < nums[0]) ) {
        low = mid+1;
    }
    else{
        high = mid;
    }
  }
  return low == high && nums[low] == target ? low : -1;
}

var nums = [4,5,6,7,0,1,2], target = 0
console.log(search(nums,0))
// O(n) O(1)
var subarraySum = function(nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0, pre = 0;
  for (const x of nums) {
      pre += x;
      if (mp.has(pre - k)) count += mp.get(pre - k);
      if (mp.has(pre)) mp.set(pre, mp.get(pre) + 1);
      else mp.set(pre, 1); 
  }
  return count;
};


var nums = [1,1,1], k = 2
console.log(subarraySum(nums, k))
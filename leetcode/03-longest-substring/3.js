/**
 * 1. 遍历字符串，m为滑动窗口
 * 2. 当前遍历的字符没出现过，num++，num和res比大小
 * 3. 如果出现过，找到当前字符在m出现的位置截取后半段给m，并且num = m的长度 
 */

var lengthOfLongestSubstring = function(s) { 
  let num = 0, res = 0;
  let m = ''
  for (n of s) {
   if (m.indexOf(n) == -1) {
      m += n;
      num++;
      // res = Math.max(res,num);
      res = res > num ? res : num
   } else {
      m += n;
      m = m.slice(m.indexOf(n)+1);
      num = m.length;
   }
  }
  return res
}

// console.log(lengthOfLongestSubstring("au"))
// console.log(lengthOfLongestSubstring("abcabcbb"))
// lengthOfLongestSubstring("abcabcbb")
// console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("BBBBB"))
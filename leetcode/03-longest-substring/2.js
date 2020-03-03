var lengthOfLongestSubstring = function(s) { 
  /**维护一个滑动窗口，窗口内的都是没有重复的字符，去尽可能的扩大窗口的大小，窗口不停的向右滑动。
   * 如果当前遍历到的字符从未出现过，那么直接扩大右边界；
     如果当前遍历到的字符出现过，则缩小窗口（左边索引向右移动），然后继续观察当前遍历到的字符；

     类似题目   30 76 159 209 239 567 632 727
   */
  const mapper = {}  //记录已经出现过的charactor
  let res = 0;
  let slidingWindow = []

  for (let c of s) {
    if (mapper[c]) {
      // 已经出现过则删除
      const delIndex = slidingWindow.findIndex(_c => _c == c) 

      for (let i = 0; i < delIndex; i++) {
        mapper[slidingWindow[i]] = false
      }

      slidingWindow = slidingWindow.slice(delIndex + 1).concat(c)
    } else {
      if (slidingWindow.push(c) > res) {
        res = slidingWindow.length
      }
    }
    mapper[c] = true
  }
  return res
}


// var s = "sad"
// console.log(s.slice(0))
// for (let c of s) {  forEach
//   console.log(c)
// }

// console.log(lengthOfLongestSubstring("au"))k
// console.log(lengthOfLongestSubstring("abcabcbb"))
// lengthOfLongestSubstring("abcabcbb")
// console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwk"))
// console.log(lengthOfLongestSubstring("BBBBB"))
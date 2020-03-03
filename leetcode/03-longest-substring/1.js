/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) return 0;
  var max = 1
  for (let i = 0; i < s.length; i++) {
    let temp = s[i]
    let count = 1
    for (let j = i + 1; j < s.length; j++) {
      if (temp != s[j]) {
        count += 1;

      } else {  
        // console.log(s[j])
        max = Math.max(max, count)
        count = 1;
      }
    }
    // max = Math.max(max, count)
  }
  return max;
}

// console.log(lengthOfLongestSubstring("au"))
console.log(lengthOfLongestSubstring("abcabcbb"))
// lengthOfLongestSubstring("abcabcbb")
// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("BBBBB"))

// var s = "abcd"
// for (let i in s) {
//   console.log(i)
// }
// var s = " "
// console.log(s.length)
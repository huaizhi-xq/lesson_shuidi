/**
 * api....
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  
  s =  s.split(' ')
  s = s.filter(item => item !== '')
  return s.reverse().join(" ")
};

var s = "the sky is    blue"

console.log(reverseWords(s))
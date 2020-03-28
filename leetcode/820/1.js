/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  words = words.map(item => item.length+item)
  words.sort((a,b) => {
    return b[0] - a[0]
  })
  // console.log(words)
  let res = ''
  for (let w of words) {
   let m = w.slice(1)
   if (!res.includes(m)) {
    res += m + '#'
   }
  }


  
  console.log(res)
  return res.length 
};


var words = ["time", "me", "bell", "e"]
// var words = ["me", "time"]

console.log(minimumLengthEncoding(words))
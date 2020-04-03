/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // console.log(str.length)
  let res = str.trim().match(/^(\-|\+)?\d+/g)
  return res ? Math.max(Math.min(Number(res[0]),2**31-1),-(2**31)) : 0
};


var str = "    -42"
console.log(myAtoi(str))
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits){
    return [];
  }
  let res = []
  let len = digits.length
  var map = new Map();
  map.set('2','abc');
  map.set('3','def');
  map.set('4','ghi');
  map.set('5','jkl');
  map.set('6','mno');
  map.set('7','pqrs');
  map.set('8','tuv');
  map.set('9','wxyz');


  var backtrack = function(i,str) {
    if (i === len) {
      res.push(str)
      return
    }
    let temp = map.get(digits[i])
    for (let r = 0; r < temp.length; r++) {
      backtrack(i+1,str+temp[r])
    }
  }

  backtrack(0,'')
  return res
};  


console.log(letterCombinations("23"))
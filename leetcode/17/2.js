var letterCombinations = function(digits) {
  if(!digits){
      return [];
  }
  let result = [];
  let len = digits.length;
  let map = new Map();
  map.set('2','abc');
  map.set('3','def');
  map.set('4','ghi');
  map.set('5','jkl');
  map.set('6','mno');
  map.set('7','pqrs');
  map.set('8','tuv');
  map.set('9','wxyz');
  
  const _generate = function (i,str){
      // terminator
      if(i === len){
          result.push(str);
          return;
      }
      // process
      // drill down
      let tmp = map.get(digits[i]);
      for(let r = 0;r<tmp.length;r++){
          _generate(i+1,str+tmp[r]);
      }
  }
  _generate(0,'');
  return result;
};

console.log(letterCombinations("23"))
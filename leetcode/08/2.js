/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const num = parseInt(str,10)
  
    if(isNaN(num)) {
      return 0
    } else if (num < Math.pow(-2,31) || num > Math.pow(2,31)-1){
      return num < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    }
    return num;
  }
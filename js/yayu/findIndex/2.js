'use strict';
// predicate 用户自定义函数
// 返回合条件的元素下标  没有返回-1
function findIndex(array, predicate, context) {
  for (let m = 0; m < array.length; m++) {
    if (predicate.call(context, array[m], m)) return m;
    
  }
  return -1;
}
// 函数可以作为参数 JS里函数是一等对象
console.log(findIndex([1,2,3,4], function(item, i) {
  console.log(this);
  if (item == 3)  return true;
},[1,2,3,4]));
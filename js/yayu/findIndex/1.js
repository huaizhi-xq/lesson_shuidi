// es6 支持
// 手写y一下findIndex
function isBigEnough(element) {
  console.log(element);
  return element >= 15;
}
console.log([12,5,8,130,44].findIndex(isBigEnough));
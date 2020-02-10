// 设计哈希函数
// 1. 将字符串转成比较大的数字
// 2. 将大的数字hashCode压缩到数组范围之内
function hashFunc(str, size) {
  // 定义hashCode
  var  hashCode = 0;

  // 霍纳算法， 计算hashCode的值
  for (var i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }

  // 取余操作
  var index = hashCode % size;

  return index;
}

console.log(hashFunc('abc',7))
console.log(hashFunc('abd',7))
console.log(hashFunc('zzz',7))
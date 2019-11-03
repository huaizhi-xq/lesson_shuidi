
// 数组去重
/**
 * 
 * @param {Array} arr
 * @return {Array} 
 */
// function unique(arr) {  es5
// function 关键字没有, 
// es6 键头函数 () => { }
let fn;
console.log(typeof fn); // undefined 未定义
fn = null;
console.log(typeof fn); // object 
fn = () => {};
console.log(typeof fn); // function
const unique = (arr) => {
//   let res = []; //数组
//   for(var i = 0; i < arr.length; i++) {
//     // 如果在res 数组中 就不加入
//     // arr[i] 
//     // let isIn = false;
//     for (var j = 0; j < res.length; j++) {
//       if (arr[i] === res[j] ) {
//         // isIn = true;
//         break;
//       }
//     }
//     //没有出现？ 
//     if (j === res.length) {
//       res.push(arr[i]);
//     }
//     // 否则push res
//   }
    var res = [arr[0]];

    for (var i=1,arrLen = arr.length; i<arrLen;i++){
        var current = arr[i]; //变量可以帮我们缓存值 局部变量
        if(res.indexOf(current) == -1){
            res.push(arr[i]);
        }
    }
  return res;
}

var arr = ['1', 2, 3, 2, 4, 1];
console.log(unique(arr));
console.log(typeof unique == 'function' && unique(arr))


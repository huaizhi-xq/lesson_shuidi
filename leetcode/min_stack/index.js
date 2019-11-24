const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');

// 队列 栈 先进后出
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift('阿珂'); //加入头部
console.log(arr);
arr.unshift('苏荃');  //
console.log(arr);

const temp = arr.shift();  //移除头部
arr.push(temp);
console.log(arr);

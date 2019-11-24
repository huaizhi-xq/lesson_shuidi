// 设计一个栈 Stack 
// 支持push pop top 
// 获得最小值
function MinStack() {
  this.stack = []; //使用数组模拟栈
  this.min = Number.MAX_VALUE;
}
MinStack.prototype.push = function(x) {
  // if (x < this.min) {
  //   this.min = x;
  // }
    this.min = Math.min(this.min,x);
  return this.stack.push(x);
}
MinStack.prototype.pop = function() {
  // var i = this.stack.pop();
  // if (i == this.min) {
  //   this.min = this.stack[0];
  //   for (var j = 1; j < this.stack.length; j += 1) {
  //     if(this.min > this.stack[j]) {
  //       this.min = this.stack[j];
  //     }
  //   }
  // }
  if(!this.stack.length)
    return 0
    let s = this.stack.pop()
    if(this.min === s){
    // console.log(...this.stack);  //所有的元素
    this.min = Math.min(...this.stack);  
    }
}
MinStack.prototype.top = function() {
  let len = this.stack.length
  if (!len)
    return 0;
  return this.stack[len - 1];
}
MinStack.prototype.getMin = function() {
  return this.min;
}
MinStack.prototype.toString = function() {
  return this.stack.join(',');
  // return ...this.stack;
}
var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
console.log(stack.toString());
console.log(stack.top());
console.log(stack.getMin());
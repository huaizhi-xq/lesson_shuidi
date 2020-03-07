// 用一个辅助数组队列  来存放值  使其递减 求max直接返回该数组第一个值
// 注意插入的时候的判断  插入的该值与辅助数组中的值比较大小 比新插入的值小的pop  然后将改值也插入辅助数组
var MaxQueue = function() {
  this.queue = [] 
  this.q = []  //存放  递减
};

/**
 * @return {number}
 */


//  有问题  队列  取最大值用了数组下标操作
MaxQueue.prototype.max_value = function() {
 
  if (this.q.length) {
    return this.q[0]
  }
  

  return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value)
  while (this.q.length && this.q[this.q.length - 1] < value) {
    this.q.pop();
  }
  this.q.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.queue.length === 0) return -1
  const value =  this.queue.shift();
  if (value === this.q[0]) {
    this.q.shift()
  }
  return value
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
var obj = new MaxQueue()
obj.push_back(1)
obj.push_back(2)
console.log(obj.max_value())
console.log(obj.pop_front())
console.log(obj.max_value())


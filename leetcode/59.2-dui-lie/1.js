var MaxQueue = function() {
  this.queue = []
};

/**
 * @return {number}
 */


//  有问题  队列  取最大值用了数组下标操作
MaxQueue.prototype.max_value = function() {
  let max = -1
  if (this.queue.length === 0) return max
  for (let i = 0; i < this.queue.length; i++) {
    if (this.queue[i] > max) max = this.queue[i]
  }

  

  return max
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.queue.length === 0) return -1
  return this.queue.shift();
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
console.log(obj.pop_front())


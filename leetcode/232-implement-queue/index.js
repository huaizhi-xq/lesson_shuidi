/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.queue = []
  this.stack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  var cur = null
  while(cur = this.queue.pop()) {
    this.stack.push(cur)
  }

  this.stack.push(x)

  while(cur = this.stack.pop()) {
    this.queue.push(cur)
  }

  // this.queue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.queue.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue[this.queue.length - 1 ]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length == 0 
};


 var obj = new MyQueue()
 obj.push(1)
 obj.push(2)
 var param_2 = obj.pop()
 console.log(param_2)
 var param_3 = obj.peek()
 console.log(param_3)
 var param_4 = obj.empty()
 console.log(param_4)

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
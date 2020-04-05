/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.cache = new Map()
  this.queue = []
  this.size = capacity
};

LFUCache.prototype.update = function(key) {
  for (let index in this.queue) {
    if (this.queue[index][0] === key) {
      this.queue[index] = [key,this.queue[index][1]+1]
      break
    }
  }
  this.queue.sort((a,b) => a[1] - b[1])
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1
  } 
 
  this.update(key)
  return this.cache.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.set(key,value)
    this.update(key)
    return
  }
  if (this.size > 0) {
    this.cache.set(key,value)
    this.size -= 1
    this.queue.push([key,1])
    this.queue.sort((a,b) => a[1] - b[1])
  } else {
    if (this.queue.length === 0) return
    let temp = this.queue.shift()
    // console.log(temp)
    this.cache.delete(temp[0])
    // console.log(this.cache)
    this.cache.set(key,value)
    this.queue.push([key,1])
    // console.log(this.cache)
  }
  
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LFUCache( 2 /* capacity (缓存容量) */ );
cache.put(1, 1);
cache.put(1, 2);
console.log(cache.get(1))      // 返回 1
// cache.put(3, 3);    // 去除 key 2
// console.log(cache.get(2));       // 返回 -1 (未找到key 2)
// console.log(cache.get(3));       // 返回 3
// cache.put(4, 4);    // 去除 key 1
// console.log(cache.get(1));       // 返回 -1 (未找到 key 1)
// console.log(cache.get(3));       // 返回 3
// console.log(cache.get(4));       // 返回 4


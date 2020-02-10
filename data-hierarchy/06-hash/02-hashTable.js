// 封装哈希表
function HashTable() {
  // 属性
  this.storage = []
  this.count = 0  // loadFactor 
  this.limit = 7

  // 方法
  // 哈希函数
  HashTable.prototype.hashFunc =  function(str, size) {
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
 
  // 插入和修改操作
  HashTable.prototype.put = function(key, value) {
    // 1. 根据key获取索引值        将数据插入到对应的位置
    // 2. 根据索引值取出bucket     如果桶不存在则创建
    // 3. 判断是新增还是修改       如果已经有值修改，否则添加
    var index = this.hashFunc(key, this.limit);

    var bucket = this.storage[index]
    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }

    bucket.forEach(tuple => {
      if (tuple[0] == key) {
        tuple[1] = value
        return
      }
    })
    bucket.push([key,value])
    this.count += 1;

    // 判断是否需要进行扩容
    if (this.count > this.limit * 0.75) this.resize(this.getPrime(this.limit * 2))

  }

  // 获取方法
  HashTable.prototype.get = function(key) {
    // 1. 根据key获取下标值
    // 2. 根据下标值获取bucket 如果bucket为null 直接返回null
    // 3. 线性查找bucket中的每一个key是否等于传入的kry 等于返回value 遍历完没有返回null
    var index = this.hashFunc(key, this.limit);

    var bucket = this.storage[index];
    // console.log(bucket)
    if (bucket == null) return null;

    // bucket.forEach(tuple => {
    //   console.log(tuple[0] == key)
    //   if (tuple[0] == key) return tuple[1];
    // })
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        return tuple[1]
      }
    }
    
    return null;
  }

  // 删除方法
  HashTable.prototype.remove = function(key) {
    // 1. 根据key获取下标值
    // 2. 根据下标值获取bucket bucket不存在 返回null
    // 3. 线性查找bucket中的每一个key是否等于传入的kry 等于删除并返回value 遍历完没有返回null
    var index = this.hashFunc(key, this.limit);

    var bucket = this.storage[index];
    if (bucket == null) return null;

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        bucket.splice(i, 1);
        this.count --;

        // 判断是否需要缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25 ) this.resize(this.isPrime(Math.floor(this.limit / 2)));

        return tuple[1]
      }
    }
    return null;
  }

  // 判断哈希表是否为空
  HashTable.prototype.isEmpty = function() {
    return this.count == 0
  }

  // 哈希表中元素的个数
  HashTable.prototype.size = function() {
    return this.count;
  }

  // 扩容
  HashTable.prototype.resize = function(newLimit) {
    // 保存旧的数据内容
    var oldStorage = this.storage;

    // 重置所有的属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    // 遍历oldStorage中所有的bucket
    for (var i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i]

      if (bucket == null) continue

      // bucket中有数据，取出数据，重新插入
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[i];
        this.put(tuple[0], tuple[1])
      }
    }
  }
  

  // 质数
  HashTable.prototype.isPrime = function(num) {
    // 1. 获取num的平方根
    var temp = parseInt(Math.sqrt(num))
  
    // 循坏判断
    for (var i = 2; i <= temp; i++) {
      if (num % i == 0)
        return false
    }
  
    return true;
  }

  // 获取质数
  HashTable.prototype.getPrime = function(num) {
    while (!this.isPrime(num)) {
      num += 1;
    }
    return num;
  }
}

var ht = new HashTable();

ht.put('aa', '123');
ht.put('BB', '321');
ht.put('acca', '456');
ht.put('dd', '789');

// ht.put('aa', '456')
console.log(ht.get('aa'))
console.log(ht.remove('aa'))
console.log(ht.get('aa'))


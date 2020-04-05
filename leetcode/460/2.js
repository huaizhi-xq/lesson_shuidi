let LFUCache = class {
  constructor(capacity) {
    this.limit = capacity
    this.cache = new Map()
    this.freqMap = new Map()
  }
  get(key) {
    let cache = this.cache
    let r = -1
    if (typeof cache[key] != 'undefined') {
      let o = cache[key]
      r = o.value
      this.updateL(key,o)
    }
    return r
  }
  updateL(key, obj) {
    let freq = obj.freq
    let arr = this.freqMap[freq]
    // 删除原频率记录
    this.freqMap[freq].splice(arr.indexOf(key), 1)
     // 清理
    if (this.freqMap[freq].length == 0) delete this.freqMap[freq]
    // 更新频率
    freq = obj.freq = obj.freq + 1
    if (!this.freqMap[freq]) this.freqMap[freq] = []
    this.freqMap[freq].push(key)
  }
  put(key, value) {
    let cache = this.cache
    let limit = this.limit
    let fmap = this.freqMap
    if (limit <= 0) return
    if(typeof key=="undefined"||typeof value=="undefined") throw new Error('key or value is undefined')
    // 存在则直接更新
    if (typeof cache[key] == "undefined") {
        // 获取频率 key
        // 判断容量是否满
        if (Object.keys(cache).length == limit) {
            let fkeys = Object.keys(fmap)
            let freq = fkeys[0]
            // 获取key集合
            let keys = fmap[freq]
            // 淘汰首位
            delete cache[keys.shift()]
            // delete cache[keys[0]];
            // keys.splice(0, 1);
            // 清理
            if (fmap[freq].length == 0) delete fmap[freq]
        }
        // 频率记录是否存在
        if (!fmap[1]) fmap[1] = []
        // 插入新值
        fmap[1].push(key)
        cache[key] = {
            value: value,
            freq: 1 // 默认的频率
        }
    } else {
        cache[key].value = value
        //更新频率记录
        this.updateL(key, cache[key])
    }
 }


}
- starwars 灵魂
  多种解法 重构 -> 不同的解法得分不一样
  1. 字符串拼接
  2. 数组的操作
    splice 看文档 start , len , dir
    slice start end 
    array 对它的修改
  3. 链式调用 chain
    返回值是数组
    arr
      .splice() //副作用， 切割
      .join() //最后
    
    
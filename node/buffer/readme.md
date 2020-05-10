# 深入浅出nodejs

## 第六章 理解Buffer

### 应用场景

在Node中需要处理网络协议，图片，文件等是，这些都要处理大量的二进制数据，Buffer对象就应运而生。

### 1. 结构

Buffer是个像Array的对象操作字节，是一个典型的JavaScript与C++结合的模块。

![image-20200509170507626](C:\Users\94932\AppData\Roaming\Typora\typora-user-images\image-20200509170507626.png)

Buffer属于堆外内存，Buffer太过常见，所以放在全局对象中了。

#### Buffer对象

新的nodejs 版本中 不在使用 new Buffer();而是使用 new buffer.from()。

```
var str = "深入浅出的nodejs"
var buf = new Buffer.from(str, 'utf8')
console.log(buf)  //<Buffer e6 b7 b1 e5 85 a5 e5 89 8d e5 87 ba e7 9a 84 6e 6f 64 65 6a 73>
console.log(buf.length)  //21  utf8 中文占3个元素，英文占一个
```

#### 内存分配

Buffer对象的内存分配在Node的C++层面实现的内存申请(处理大量的字节数据)。

对于小而频繁的buffer采用slab机制来进行预先申请和事后分配。

### 2. 转换

转字符串，

```
var str = "深入前出的nodejs"
var buf = new Buffer.from(str, 'utf8')
console.log(buf)
console.log(buf.toString())  //深入前出的nodejs
```

`Buffer.isEncoding(encoding)`判断是否支持转换

### 3. 拼接

读取流，只是英文不会有问题，如果有中文就会出现问题。

```
var fs = require('fs'); 
var rs = fs.createReadStream('test.md'); 
var data = ''; 
rs.on("data", function (chunk){ 
 data += chunk; 
}); 
rs.on("end", function () { 
 console.log(data); 
}); 
```

因为：

数据进行拼接主要是这句代码`data += chunk; `，这实际上是`data = data.toString() + chunk.toString(); `所以中文会出现问题。

因此：

`rs.setEncoding('utf8'); `设置utf8编码就可以解决了，但是它目前能处理的编码格式有限，所以并不能从根本上解决问题。

正确拼接:

```
var chunks = []; 
var size = 0; 
res.on('data', function (chunk) { 
 chunks.push(chunk); 
 size += chunk.length; 
}); 
res.on('end', function () { 
 var buf = Buffer.concat(chunks, size); 
 var str = iconv.decode(buf, 'utf8'); //设置编码， setEncoding也是在内部设置这个对象
 console.log(str); 
}); 

```

通过一个数组来存储接受到的buffer片段，并记录总长度，最后再调用concat拼接。

### 总结

Buffer不是字符串，Buffer是二进制数据，字符串与Buffer存在编码关系。
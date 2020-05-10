var str = "深入前出的nodejs"
var buf = new Buffer.from(str, 'utf8')
buf[1] = -100
console.log(buf)
console.log(buf[1])
console.log(buf.length)  //21
console.log(buf.toString())
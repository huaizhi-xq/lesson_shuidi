// 2. 引入css文件  webpack bunder 一切静态资源
// 1 const es6 -> es5  env
require('./style/index.css')  
const h2 = document.createComment('h2')
h2.innerText = "testaaa"
h2.className = 'test'
// 挂载点
document.body.append(h2)

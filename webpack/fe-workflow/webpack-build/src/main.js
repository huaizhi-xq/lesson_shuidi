import TS from './ts/index.ts'  //typescript 
// 2. 引入css文件  webpack bunder 一切静态资源
// 1 const es6 -> es5  env
// require('./style/index.css')  
new TS()
const h2 = document.createElement('h2')
h2.innerText = "testaaa"
h2.className = 'test'
// 挂载点
document.body.append(h2)

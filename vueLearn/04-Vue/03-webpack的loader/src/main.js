// commonJS模块化
const {add, mul} = require('./js/mathUtil')

console.log(add(2,3))
console.log(mul(2,3))

// es6模块化
import {name, age} from './js/info.js'
console.log(name + ' ' + age)

// 依赖css文件
require('./css/normal.css')

// less文件
require('./css/special.less')
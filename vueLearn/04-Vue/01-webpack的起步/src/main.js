// commonJS模块化
const {add, mul} = require('./mathUtil')

console.log(add(2,3))
console.log(mul(2,3))

// es6模块化
import {name, age} from './info.js'
console.log(name + ' ' + age)

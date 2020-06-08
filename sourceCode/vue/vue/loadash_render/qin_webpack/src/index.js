import { template } from 'loadsh'

// const compiler = template('<h1><%=title %></h1>')  //设置为模板
// // ajax  RIA
// const html = compiler({title: 'My Component'})
// // console.log(html)
// document.getElementById('app').innerHTML = html

// setTimeout(() => {
//   document.getElementById('app').innerHTML = compiler({title: 'New Component'})
// },2000)


// 函数式组件 
const MyComponent = props => {
  // 缓存优化
  // console.log(MyComponent.cache)
  const compiler =  MyComponent.cache || (MyComponent.cache = template('<h1><%=title %></h1>'))   /**复用 */
  return compiler(props)
}

MyComponent.cache = null

document.getElementById('app').innerHTML = MyComponent({title: 'MyConponent'})

setTimeout(() => {
  document.getElementById('app').innerHTML = MyComponent({title: 'NewConponent'})
},2000)
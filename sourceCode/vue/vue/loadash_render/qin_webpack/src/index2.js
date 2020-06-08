import { h } from 'snabbdom'

// 产出虚拟DOM
const MyComponent  = props => {
  return h('h1', props.title)
}
console.log(MyComponent({title: 'hhh'}))
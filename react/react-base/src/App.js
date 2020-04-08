import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

// 类组件
class Header extends React.Component {
  state = {
    list: [
      'A','B','C'
    ]
  }
  render() {
    const {color} = this.props
    const {list} = this.state
    return (
      <React.Fragment>
        <header style={{
          color
        }}>
          头
          {
            list.map((char,i) => {
              return <h3 key={i}>{char}</h3>
            })
          }
        </header>
        <div>头 </div>
      </React.Fragment>
    )
  }
}

// state
/** vue
 * data() {
 *  return {
 *    list: []
 *  }
 * }
 * this.list.push()
 */
function App() {
  let book = 'js book'
  let list =  [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const [listState, setListState] = useState(list)
  let hasData = list.length > 0;
  // 列表的渲染  jsx 会自动展开数组
  const listEle = listState.map((person,i) =>{
    return (
      // key 区分我们前后两次的节点  可不可以复用(要不要销毁在重建)
      // 如果key相同 会导致复用功能混乱     没有key报警告
      <li key={i}> 
        姓名: {person.first}-{person.last},寿命: {person.passed - person.year}
      </li>
    )
  })
  // console.log(list)
  setTimeout(() => {
    let newData = list.slice(0,list.length-1)
    setListState(newData)
  },3000)
  return (
   <div>
     <Header color="red"></Header>
     { book }
     { hasData ? listEle : <em>暂无数据</em> }
   </div>
  ); 
}

export default App;

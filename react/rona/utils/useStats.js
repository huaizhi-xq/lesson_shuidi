import { useState, useEffect } from 'react'  //共享状态的useState方法 react hooks

export default function useStats(url) {
  // console.log(url)
  // form input 双向绑定新写法  
  // react 很多写法都淘汰了
  const [stats, setStats] = useState() 
  // 加载中 ajax loading
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState()
  // 封装state的处理
  // react hooks 还有声明函数 可以在订阅了useState的组件 挂载上去后，立即执行  
  // useEffect  相当于生命周期函数，
  // state + lifecycle  ->  react hooks  重要性独立到一个模块
  useEffect(() => {
    console.log('mounted')
    async function fetchData() {
      setLoading(true)
     const data = await fetch(url)
      .then(res => res.json())
      .catch(err => {
        setError(err)
      })
      setStats(data)
      // console.log(data)
      setLoading(false)
    }
    fetchData()
  },[url])
  
  return {
    stats,
    loading,
    error
  }
}
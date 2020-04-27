// method  
type HttpMethods = 'get' | 'GET' | 'POST' | 'post' | 'DELETE' | 'delete'

type FuncType = (url: string, method: HttpMethods) => Promise<any> 
const fetchData: FuncType = (url: string, method: HttpMethods) => {
  return new Promise((resolve, reject) => {
    fetch(url,{
      method
    })
      .then(res => res.json())
      .then(res => {
        resolve(res)
      })
      .catch(err => reject(err))
  })
}

// umi  antd pro  已经可以运行的项目(admin)
export {
  fetchData
}
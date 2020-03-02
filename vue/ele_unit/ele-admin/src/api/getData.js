/**
 * API定义集合文件
 * @param {*} data 
 */
// export const login = (data) => {
//   return new Promise((resolve,reject) => {
//     // setTimeout(() => {
//     //   resolve({
//     //     status: 0,
//     //     message: '用户名或密码错误'
//     //   },1000)
//     // })

//     // 跨域了  http://127.0.0.1:3000
//     fetch('/api/admin/login', {
//       method: 'POST', //请求头
//       body: JSON.stringify(data) //请求体 request body
//     })
//     .then(data => data.json())
//     .then(data => {
//       resolve(data)
//     })
//     .catch(err => {
//       // console.log(err)
//       reject(err)
//     })
//   })
// }


/**
 * API定义集合文件，
 * @param {*} data 
 */
export const login = (data) => {
  return new Promise((resolve, reject) => {
    // http://127.0.0.1:8080/  跨项目 
    // 跨机房 跨域了吗？http://127.0.0.1:3000
    fetch('/api/admin/login', {
      method: 'POST', //请求头
      body: JSON.stringify(data) //请求体 request body
    })
    .then(data => data.json())
    .then(data => {
      console.log(data, '----------')
      resolve(data)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
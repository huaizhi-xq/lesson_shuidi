// 将用户模块独立
const signIn = token => new Promise((resolve, reject) => {
  wx.setStorageSync('token', token);
  wx.request({
    url: 'https://api.github.com/user',
    data: {},
    header: Object.assign({'Authorization': token}, {}),  //头部授权
    method: 'GET',
    success: function(res) {
      // console.log('ss');
      wx.setStorage({
       key: 'user',
       data: res.data
      })
      resolve(res.data);
    }
  })
})
module.exports = {
  signIn
}
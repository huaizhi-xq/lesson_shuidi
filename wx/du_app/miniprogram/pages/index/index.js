Page({
  data () {
    du: []
  },
  onLoad () {
    // 要去其他网站拿数据
    // 上云 计算能力特别强 前端， 后端合作的感觉
    wx.cloud.callFunction({  //声明云函数
      name: 'getdu'
    })
    //从云下来
    .then(res => {
      console.log(res);
      this.setData({
        du: res.result.data
      })
    }) 
  }
})
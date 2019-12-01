const app = getApp();

Page({
  data: {
    navScrollLeft: 0,
    navData: [
      {
        id: 1,
        name: '专车'
      },
      {
        id: 1,
        name: '快车'
      },
    ],
    currentTab: 2
  },
  showUser() {
    // 用户如果点击了授权，就显示用户信息，如果没有则取登陆
    wx.navigateTo({
      url: "/pages/login/login"
    })
  },
  onLoad() {
    //请求数据
    wx.request({
      url: 'http://localhost:1314/indexPage',
      success: (res) => {
        // console.log(res);
        const navData = res.data.navData;
        this.setData({
          navData
        })
      }
    })
  },
  switchNav(e) {
    const cur = e.currentTarget.dataset.current;
    console.log(cur);
    this.setData({
      currentTab: cur
    })
  }
})
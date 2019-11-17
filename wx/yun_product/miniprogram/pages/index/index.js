// 小程序很简单都是由Page构成
// wxml wxss js json 
Page({
  navigateToAdd: function () { 
    // console.log('去add页面')
    wx.navigateTo({
      url: '../add/add'
    })
  },
  navigateToList: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  }
})
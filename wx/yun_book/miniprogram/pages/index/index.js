Page({
  scanCode () {
    wx.scanCode({
      onlyFromCamera: true,
      sacnType: ['barCode'],
      success: res => {
        // wx.showToast({
        //   title: JSON.stringify(res.result),
        //   icon: 'hhh',
        //   duration: 10000
        // })
        let isbn = res.result;
        // isbn -> 到云里查一下
        // 委派一朵云区查API
        wx.cloud.callFunction({
          name: 'bookinfo',
          data: {
            isbn: isbn
          },
          success: res => {
            console.log(res.result);
          }
        })
      }
    })
  }
})
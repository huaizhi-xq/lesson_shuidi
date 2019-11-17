const db = wx.cloud.database(); //上云
const productsCollection = db.collection('products');//表 collection

Page({
  addData() {
    // api化
    productsCollection.add({
      data: {
        title: `Product ${(Math.random() * 100).toString()}`, //${} js语句
        price: Math.random() * 1000,
        color: 'blue',
        tags: ["羽绒服","国际品牌"],
        view: Math.random() * 10,
        image: 'https://img.alicdn.com/imgextra/i1/2105020529/O1CN013sbrjP1FmK4yAsJUt_!!2105020529.jpg_430x430q90.jpg'
      }
    }).then(res => {
      console.log(res);
    })
  }
})
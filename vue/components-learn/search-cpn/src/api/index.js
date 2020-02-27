const getGoodsInfo = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        goodsImg: ''
      })
    },1000)
  })
}

export default {
  getGoodsInfo
}
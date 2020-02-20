const Model = require('../model') //mvc
const {Manufacturer, Product } = Model;

const manufacturerController = {
  async all(req, res) {
    const m = await Manufacturer.find()
    res.json({
      manufacturer: m
    })
  },
  // 创建一家公司
  create(req, res) {
    const requsetBody = req.body; //请求体 表单
    console.log(requsetBody)
    const newManufacturer = new Manufacturer(requsetBody)
    newManufacturer.save((err,saved) => {
      res.json({
        mes: 'ok'
      })
    }) 
   
  }
}

module.exports = manufacturerController
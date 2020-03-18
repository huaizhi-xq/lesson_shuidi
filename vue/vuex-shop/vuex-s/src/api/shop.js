const _products = [
  {
    id: 1,
    title: 'iPad 4 Mini',
    price: 500.01,
    inventory: 2
  },
  {
    id: 2,
    title: 'H&M',
    price: 10.99,
    inventory: 10
  },
  {
    id: 3,
    title: 'XCX',
    price: 19.9,
    inventory: 5
  }
]

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 1000)
  },

  buyProducts(products, cb, errorCb){
    setTimeout(() => {
      Math.random() > 0.5  ? cb():errorCb()
    },1000)
  }
}
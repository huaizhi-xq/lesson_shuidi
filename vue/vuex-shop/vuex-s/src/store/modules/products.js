import shop from "../../api/shop"

const state = {
  all: [
    
  ]
}
const mutations = {
  setProducts(state, products) {
    state.all = products
  },
  decrementProductInentory(state, {id }) {
    const  product = state.all.find(product => product.id === id)
    product.inventory--
  }
}
const actions = {
  getAllProducts({commit}) {
    // console.log('...')
    // api
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}
const getters = {

}
export default {
  namespaced: true, //命名空间
  state,
  mutations,
  actions,
  getters
}
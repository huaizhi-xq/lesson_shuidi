import shop from '../../api/shop'

const state = {
  items: [],
  checkoutStatus: null
}
const mutations = {
  pushProductToCart(state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++  
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },

  setCartItems(state, {items}) {
    state.items = items
  }
}
const actions = {
  addProductToCart({commit}, product) {
    // console.log(payload)
    // 没有则添加  有数量加1
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart',{id: product.id})
      } else {
        commit('incrementItemQuantity', cartItem)
      }
    }
    // mutations products decreateQuantity 树
    commit('products/decrementProductInentory', {id: product.id}, {root: true})
  },
  checkout({commit}, products) {
    console.log('++++')
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', {items: []})
    shop.buyProducts(  //api
      products,
      // success
      () => commit('setCheckoutStatus', 'successful'),
      //error
      () => {
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', {items: savedCartItems})
      }
    )  
  }
}
const getters = {
  cartProducts(state, getters, rootState) {
    // 穿梭到products state.all
    // [{id: 1, quantity: 1}] = > [{id: 1, title: 'ipad', price}]
    return state.items.map(({id, quantity}) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {  
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice(state, getters) {
    // all id quantity * price
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },

 
}
export default {
  namespaced: true, //命名空间
  state,
  mutations,
  actions,
  getters
}
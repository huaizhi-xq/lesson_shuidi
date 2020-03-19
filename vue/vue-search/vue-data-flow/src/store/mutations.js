// 围绕状态  设计改变 
// login  false true
import {
  RECORD_USERINFO,
  ADD_CART,
  UBCREMENT_QUANTITY,
  CHECKOUT
} from './mutation-types'

export default {
  // login {avatar:'', username: ''}
  [RECORD_USERINFO](state, info)  {
    state.userInfo = info
    state.login = true
  },
  // cartList ?
  [ADD_CART](state, {productId}) {

  },
  [UBCREMENT_QUANTITY](state) {

  },
  [CHECKOUT]() {

  }
}
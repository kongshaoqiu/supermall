import {
    ADD_COUNTER,
    ADD_TO_CART,
} from './mutation-types' 
 
export default{
    [ADD_COUNTER](state,payload){
        payload.count++         //购物数量的变动
    },
    [ADD_TO_CART](state,payload){
        payload.checked = true   //购物按钮的选定
        state.cartList.push(payload)
    }
}
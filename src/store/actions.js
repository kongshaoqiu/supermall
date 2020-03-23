import {
    ADD_COUNTER,
    ADD_TO_CART,
} from './mutation-types' 

export default{
    addCart(context,payload){
        return new Promise((resolve,reject)=>{
              //此处是利用数组的find方法查找是否新加的商品payload.iid是否和旧商品item.iid相等
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid )

        //判断oldProduct存在的话说明有旧的商品那么则数量加一，如果没有一样的就保持一个数量
        if(oldProduct){
            //oldProduct.count +=1
            context.commit(ADD_COUNTER,oldProduct)
                resolve('当前的商品数量+1')
            }else{
            payload.count = 1
            context.commit(ADD_TO_CART,payload)
                resolve('成功添加到购物车')
            } 
        })                
    }
}
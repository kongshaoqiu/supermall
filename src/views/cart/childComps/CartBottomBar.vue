<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button 
          :isChecked="isSelectAll" 
          class="check-button"
          @click.native="checkClick"/>
          <span>全选</span>

          <div class="price">
               合计:￥{{totalPrice}}
          </div>
          <div class="calculate">
              去计算:{{checkLength}}
          </div>
      </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'


export default {
    name:'CartBottomBar',
    components:{
        CheckButton,
    },
    computed:{
        ...mapGetters(['cartList']),
        totalPrice(){
            return  this.$store.state.cartList.filter(item =>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.cartList.filter(item => item.checked).length
        },
        isSelectAll(){
           if(this.cartList.length === 0) return false 
           return this.cartList.every(item => item.checked)   
           //利用every一旦找出checked未选中的，不符合条件的就返回flase
           //return !(this.cartList.filter(item => !item.checked).length)
        }
    },
    methods:{
        checkClick(){
            if(this.isSelectAll){    //这是全部商品被选中时
                this.cartList.forEach(item =>item.checked = false)
            }else{  //部分商品，或者全部商品没被选中时
                this.cartList.forEach(item =>item.checked = true)

            }
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    background-color: #eee;
    position: relative;
    display: flex;


    line-height: 40px;
    height: 40px;

    font-size: 14px;
    
}
.check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;

}
.check-content{
    display: flex;
    align-items: center;
    margin-left: 10px; 
}
.price{
    margin-left: 20px;
}
.calculate{
    width: 110px;
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    right: 0px;
    text-align: center;
}
</style>
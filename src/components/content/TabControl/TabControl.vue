<template>
  <div class="tab-control">
    <div    v-for="(item,index) in titles" 
            :key="(item,index)"  
            class="tab-control-item"
            :class="{active: index === currentIndex}" 
            @click="itemClick(index)">
             <!-- 没被点击的index会对应不上，所以不会有class样式变动 -->
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        },    
    },
    data(){
        return {
            currentIndex: 0
            //默认第一个选中,索引为0 
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;  
            // console.log(index);
            this.$emit('tabClick',index)
        }
    }   
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;  
        /* font有关的可以继承 */
        background-color: #fff;
    }
    .tab-control-item{
        flex:1;   
    }
    .tab-control-item span{
         padding:5px;
    }
    .active span{
         border-bottom:3px solid var(--color-tint);       
    }
    .active{
        color:var(--color-high-text);      
    }
</style>
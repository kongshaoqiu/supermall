<template>
  <div class="wrapper" ref='wrapper'>
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    props:{
        probeType:{
            type:Number,    //从外部传入proType防止占用内存一直调用此函数
            defalut:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null,
        }
    },
    mounted(){
        //1，创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true,
            pullUpLoad:this.pullUpLoad,
        })

        //2.设置滚动监听
        this.scroll.on('scroll', (position) => {
            //console.log(position);
            this.$emit('scroll', position)
        })

        //3.监听上拉事件

        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
           // console.log('上拉加载更多')
           this.$emit('pullingUp')
        })
        }
        
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            //console.log('----');
            this.scroll && this.scroll.refresh()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0;
        }
    },
}
</script>

<style>

</style>
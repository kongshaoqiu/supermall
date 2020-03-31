<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control class="tab-control" 
                    :titles="['流行','新款','精选']"
                    @tabClick="tabClick"
                    ref="tabControl1" v-show="isTabFixed"/> 
      <scroll class="content" 
              ref="scroll"  
              :probe-type="3" 
              @scroll="contentScroll" 
              :pull-up-load="true"
              @pullingUp="loadMore">
        <!-- 轮播图 -->
        <home-swiper :banners='banners' @swiperImageLoad="swiperImageLoad"/>
        <!-- 推荐分类 -->
        <recommend-view :recommends='recommends'/>
        <!-- 本周流行 -->
        <feature-view/>
        <!-- tabBarControl -->
        <tab-control class="tab-control" 
                    :titles="['流行','新款','精选']"
                    @tabClick="tabClick"
                    ref="tabControl2"/> 
        <goods-list :goods="showGoods"/>
      </scroll>

       <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
  
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

 
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/TabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import GoodsListItem from '@/components/content/goods/GoodsListItem'
import Scroll from '@/components/common/scroll/Scroll' 
import BackTop from '@/components/content/backTop/BackTop'


import {getHomeMultiData,getHomeGoodsData,} from '@/network/home';
import { debounce } from '@/common/utils'
import { delay } from 'q'


export default {
    name:'Home',
    components:{
      HomeSwiper,
      RecommendView, 
      FeatureView,
  
      NavBar,
      TabControl,
      GoodsList,
      GoodsListItem,
      Scroll,
      BackTop,
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}, 
        },
        currentType:'pop',
        isShowBackTop: false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
      }
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY();  
      console.log(this.saveY)
    },
    computed:{
    
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    created(){
      //1.请求多个数据res就是封装的getHomeMultidata()请求过来的数据
      this.getHomeMultiData()

      //2.请求商品数据
       this.getHomeGoodsData('pop');
       this.getHomeGoodsData('new');
       this.getHomeGoodsData('sell'); 
       
    
    },

    mounted(){
      //1.图片加载的事件监听
      const refresh =debounce(this.$refs.scroll.refresh,200)      
      //3.监听item图片加载完成
       this.$bus.$on('itemImageLoad',() => {
          //this.$refs.scroll.refresh();
          refresh()//从上面取得的返回值的函数 
        })

      //2.获取tabControl的offsetTop 
      //3.赋值
       //this.tabOffsetTop = this.$refs.tabControl
     
    },
    destroyed(){
      console.log('home destoyed')
    },
    methods:{
      /**
       * 事件监听相关的方法
       */

        swiperImageLoad(){
           this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
        },
        tabClick(index){
          switch(index){
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break 
            case 2:
              this.currentType = 'sell'
              break
          }
          this.$refs.tabControl1.currentIndex = index;
          this.$refs.tabControl2.currentIndex = index;
        },
        backClick(){
          this.$refs.scroll.scroll.scrollTo(0,0,500); 
        },
        contentScroll(position){
          //1.判断BackTop是否显示
          this.isShowBackTop = (-position.y) > 1000

          //2.决定tabcontrol是否吸顶(position:fixed)
          this.isTabFixed=(-position.y)>this.tabOffsetTop

          //console.log(position)

        },
        loadMore(){
          this.getHomeGoodsData(this.currentType)
        },
      /**
       * 网络请求
       */
      getHomeMultiData(){
        getHomeMultiData().then(res => { 
          //console.log(res);
         //因为函数栈里面的数据会被回收，所以res要储存起来
          this.banners=res.data.banner.list; 
          this.recommends=res.data.recommend.list;
        })
      },
      getHomeGoodsData(type){
          const page = this.goods[type].page + 1  //数据索引从0开始，所以页码要+1
          getHomeGoodsData(type,page).then(res => {
           //console.log(res.data);       
             this.goods[type].list.push(...res.data.list);
            //  for(let n in res.data.list){
            //    this.goods[type].list.push(n);
            //  }
            // console.log(this.goods);
             this.goods[type].page += 1;
             
             this.$refs.scroll.finishPullUp()
        })
      },
    },
     
}
</script>

<style scoped>
  #home{
    /* padding-top:44px; */

    height: 100vh;
    position: relative;
  } 
  .home-nav{
    background-color:var(--color-tint);
    color: #fff;

    /* position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 9; */
  }
  /* .tab-control{
    position: relative;

     position:sticky;
    top:44px; 
    z-index: 9;
  } */
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 45px;
    left: 0;
    right: 0;
}
  /* .content{
    height: calc(100vh-89px);
     overflow: hidden;  
  } */ 
  .tab-control{
    position:relative;
    z-index: 9;
  } 
</style>
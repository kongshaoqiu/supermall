<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3"
            :pull-up-load=true
            @scroll="contentScroll">    
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>  
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends"/>

     
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addCart='addToCart'/>
    <toast :message="message" :show="show"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'
import GoodsList from '@/components/content/goods/GoodsList'

import Toast from '@/components/common/toast/Toast'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'
import {debounce} from '@/common/utils'
 
export default {
    name:"Detail",
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},       //对应每一项详情页的仔细数据
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],   //详情页的每一个商品项目的合集
            themeTopYs:[],
            //getThemeTopY: null,
            currentIndex: 0,
            isShowBackTop: false,
            show:false,
            message:'',
             
        }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,

      Scroll,
      GoodsList,
      BackTop,
      Toast,
    },
    created(){
    //  this.themeTopYs = debounce(()=>{
    //     this.themeTopYs=[]; 

    //     this.themeTopYs.push(0);
    //     this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    //     console.log(this.themeTopYs);
    //  })
    },
    activated(){
           //1.保存传入的iid
        this.iid = this.$route.params.iid;
        console.log(this.iid);   

        //2.根据iid请求详情数据
        getDetail(this.iid).then(res =>{
          //1.获取顶部轮播图数据
          console.log(res);
          const data = res.result;
          this.topImages = data.itemInfo.topImages;

          //2.获取商品信息
          this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

          //3.获取店铺信息
          this.shop=new Shop(data.shopInfo)

          //4.保存商品的详情数据
          this.detailInfo=data.detailInfo

          //5.获取参数信息
          this.paramInfo=new GoodsParam( data.itemParams.info , data.itemParams.rule )

          //6.取出参数信息

          //7.取出评论信息
          if(data.rate.cRate !== 0){
              this.commentInfo =data.rate.list[0] 
          }

        })

        //3.请求推荐数据
        getRecommend().then(res=>{
          //console.log(res);
          this.recommends = res.data.list;
        })
    },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh() 

              this.themeTopYs=[];

              this.themeTopYs.push(0);
              this.themeTopYs.push(this.$refs.params.$el.offsetTop);
              this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
              this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
              //console.log(this.themeTopYs);
      },
      titleClick(index){
        //console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){  
          this.isShowBackTop = (-position.y) > 1000    
          const positionY = -position.y;
          let length = this.themeTopYs.length;
          for (let i = 0; i < length;i++) {
            if (positionY>this.themeTopYs[i]) {
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex
            }
          //    if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])){
          //     this.currentIndex = i;
          //     this.$refs.nav.currentIndex = this.currentIndex;
          //   } 
             
       }
        //this.listenShowBackTop(position)  
      },
      backClick(){
          this.$refs.scroll.scroll.scrollTo(0,0,500); 
        },
      addToCart(){
        //1.获取购物车所需要的信息
        const product = {}
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.price = this.goods.realPrice;
          product.iid = this.iid; 

        //2.将商品添加到购物车
        this.$store.dispatch('addCart',product).then(res=>{
          this.show = true,
          this.message = res;

          setTimeout(()=>{
            this.show = false;
            this.message = ''
          },1500)
        })

        
      },  
    },
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100vh - 100px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>

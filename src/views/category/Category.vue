<template>
  <div class="wra" ref="aaaa">
    <search-bar/>
    <div v-for="(item,index) in ['k','o','n','g']" 
         :key="(item,index)"
         @click="itemClick(index)">
        <span>{{item}}</span>
         </div>
      <div class="father">
      <scroll class="child1">  
          <ul>
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
            <li>列表4</li>
            <li>列表5</li>
            <li>列表6</li>
            <li>列表7</li>
            <li>列表8</li>
            <li>列表9</li>
            <li>列表10</li>
            <li>列表11</li>
            <li>列表12</li>
            <li>列表13</li>
            <li>列表14</li>
            <li>列表15</li>
            <li>列表16</li>
            <li>列表17</li>
            <li>列表18</li>
            <li>列表19</li>
            <li>列表20</li>
            <li>列表21</li>
            <li>列表22</li>
            <li>列表23</li>
            <li>列表24</li>
            <li>列表25</li>
            <li>列表26</li>
            <li>列表27</li>
            <li>列表28</li>
            <li>列表29</li>
            <li>列表30</li>
            <li>列表31</li>
            <li>列表32</li>
            <li>列表33</li>
            <li>列表34</li>
            <li>列表35</li>
            <li>列表36</li>
            <li>列表37</li>
            <li>列表38</li>
          </ul> 
      </scroll>     
      <div class="child2">
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
        <div><span>商品</span></div>
      </div>
      </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import Scroll from '@/components/common/scroll/Scroll' 

import SearchBar from './SearchBar'

export default {
    name:'Category',
    components:{
      SearchBar,
      Scroll, 
    },
    data(){
      return{
        scroll:null
      }
    },
    methods:{
      itemClick(index){
        switch (index) {
          case 0:
            console.log('k')
            break;
          case 1:
            console.log('o')
            break;
          case 2:
            console.log('n')
            break;
          case 3:
            console.log('g')
            break;
          default:
            break;
        }
      }
    },
    //组件创建完后调用
    mounted(){
      // this.scroll = new BScroll(document.querySelector('.wrapper'),{
      //   probeType:3,
      //   click:true,
      //   //pullUpLoad:true, 
      // })
      
      // this.scroll.on('scroll',(position)=>{
      //   //console.log(position);
      // })

      // this.scroll.on('pullingUp',()=>{
      //   console.log('上拉加载更多...')
      // })
    }
} 
</script>

<style scoped>
.wra{
  height: 100vh;
}
.father{
    overflow: hidden; 
    display: flex; 
    position: absolute;
    top:150px;
    bottom: 50px;
    left: 0px;
    right: 0px;
}
 .child1{
   width:20%;
   background-color:pink;
 }
 .child2{
   width: 80%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   overflow: scroll;
 }
 .child2>div{
   width: 33%;
   height: 20%;
   margin-left: 0px;
 }
 .child2>div>span{
  display:block;
  background-color: red;
  margin-bottom: 0px;
  margin-top:66px;
  text-align:center;
 }
 ::-webkit-scrollbar{
   display: none;
 }
 li{
   list-style: none;
 }
</style>
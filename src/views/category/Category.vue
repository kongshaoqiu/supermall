<template>
  <div class="wra" ref="aaaa">
    <search-bar/>
    <scroll class="content">  
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
 .content{
   background-color: pink;
    overflow: hidden;
    position: absolute;
    top: 150px;
    bottom: 45px;
    left: 0;
    right: 0;
}
</style>
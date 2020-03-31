<template>
  <div>
    <input class="text" 
           type="string"
            v-model="user.userName"
           placeholder="请输入您的用户名">
    <input class="text" 
           type="string"
           v-model="user.passWord"
           placeholder="请输入您的密码">
    <button @click="onPush" class="btn">注册</button>
    <br>
    <span>{{this.users}}</span>
        
    <scroll class="content">
      <ul>
        <li>个人信息1</li>
        <li>个人信息2</li>
        <li>个人信息3</li>
        <li>个人信息4</li>
        <li>个人信息5</li>
        <li>个人信息6</li>
        <li>个人信息7</li>
        <li>个人信息8</li>
        <li>个人信息9</li>
        <li>个人信息10</li>
        <li>个人信息11</li>
        <li>个人信息12</li>
        <li>个人信息13</li>
        <li>个人信息14</li>
        <li>个人信息15</li>
        <li>个人信息16</li>
        <li>个人信息17</li>
        <li>个人信息18</li>
        <li>个人信息19</li>
        <li>个人信息20</li>
        <li>个人信息21</li>
        <li>个人信息22</li>
        <li>个人信息23</li>
        <li>个人信息24</li>
        <li>个人信息25</li>
        <li>个人信息26</li>
        <li>个人信息27</li>
        <li>个人信息28</li>
        <li>个人信息29</li>
        <li>个人信息30</li>
        <li>个人信息31</li>
        <li>个人信息32</li>
        <li>个人信息33</li>
        <li>个人信息34</li>
        <li>个人信息35</li>
        <li>个人信息36</li>
        <li>个人信息37</li>
        <li>个人信息38</li>
        <li>个人信息39</li>
        <li>个人信息40</li>
        <li>个人信息41</li>
        <li>个人信息42</li>
        <li>个人信息43</li>
        <li>个人信息44</li>
        <li>个人信息45</li>
        <li>个人信息46</li>
        <li>个人信息47</li>
        <li>个人信息48</li>
        <li>个人信息49</li>
        <li>个人信息50</li>
      </ul>
    </scroll>
    <click-bar/>
    <my-charts/>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import ClickBar from './ClickBar'
import MyCharts from './MyCharts'

export default {
    name:'Profile',
    components:{
      Scroll,
      ClickBar,
      MyCharts
    },
    data(){
      return{
        user:{
              userName:'',
              passWord:''
            },
        users:[]
         
      }
    },
    methods:{
      onPush(){
        
        
        this.users.push(JSON.parse(JSON.stringify(this.user)))


        //console.log(this.users)
        // console.log(this.user.userName)
        // console.log(this.user.passWord)
      }
    }
}
</script>

<style scoped>
  .content{
    height: 300px;
    background-color: pink;
    overflow:hidden;
  }
  .text{
    width:50vh;
    height:7vh;
    font-size: 30px;
    text-indent: 1em;
  }
  .btn{
    width: 10vh;
    height: 6vh;
    margin-left: 5px;
    margin-top: 10px;
  }
</style>
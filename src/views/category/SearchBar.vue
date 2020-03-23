<template>
  <div class="SearchBar">
    <div class="content">
        <input  type="text" 
                placeholder="请输入搜索内容" 
                class="text"
                v-model="search" >
        <button @click="searchClick" 
                class="btn"
                >搜索</button>
        <ul v-for='list in searchData'>
          <li>{{list.name}}</li>
          <li>{{list.date}}</li>
          <li>{{list.price}}</li>
        </ul>
    </div>  
  </div>
</template>

<script>
export default {
    name:'SearchBar',
    data(){
      return{
        search:'',
        searchData:'',
        products:[
          {name:'海贼王',date:'2020-01-02',price:'￥25'},
          {name:'火影忍者',date:'2020-01-05',price:'￥20'},
          {name:'高分少女',date:'2020-01-16',price:'￥18'},
          {name:'一击男',date:'2020-01-22',price:'￥29'},
        ]
      }
    },
    methods:{
      searchClick(){
        //console.log(this.search)
        let search = this.search;
        if(search){
          this.searchData = this.products.filter(
            function(obj){
                //console.log(Object.keys(obj));
                return Object.keys(obj).some(function(key){
                //console.log(key);
                //console.log(obj[key]);
                return String(obj[key]).indexOf(search)>-1
              })
            }
          )}
        },
    },
}
</script>

<style scoped>
.SearchBar{
  height: 44px;
  display: flex;
}
.content{
  margin: auto;
  
}
.text{
  height: 5vh;
  width: 65vw;
  font-size: 14px;
  text-indent:5px;
}
.text:hover{
  cursor:text;   
}
.btn{
  height: 5vh;
  width: 15vw;
  background-color: red;
  color: #fff;
  border: none;
  margin-left: 4px;
  font-size: 14px;  

}
</style>
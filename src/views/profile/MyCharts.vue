<template>
  <div class="hello">
    <div id="chart1"></div>
    <div>111</div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'MyCharts',
    data () {
        return {
        }
    },
    mounted() {
        //this.$chart.line1('chart1');
        echarts.init(document.getElementById('chart1')).setOption({
            // series: {
            //     type: 'pie',
            //     data: [
            //         {name: 'A', value: 1212},
            //         {name: 'B', value: 2323},
            //         {name: 'C', value: 1919}
            //     ]
            // }
            series : [{
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              roseType: 'angle',
              itemStyle: {
                  // 阴影的大小
                  shadowBlur: 200,
                  // 阴影水平方向上的偏移
                  shadowOffsetX: 0,
                  // 阴影垂直方向上的偏移
                  shadowOffsetY: 0,
                  // 阴影颜色
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              itemStyle: {
                  emphasis: {
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              },
              data:[
                  {value:235, name:'视频广告'},
                  {value:274, name:'联盟广告'},
                  {value:310, name:'邮件营销'},
                  {value:335, name:'直接访问'},
                  {value:400, name:'搜索引擎'}
              ]
        }
    ]
        });
    }
}
</script>

<style>
     #chart1 {
    width: 350px;
    height: 300px;
  }
</style>
import echarts from 'echarts'

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $chart:{
            get(){
                return {
                    line1:function(id){
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            title:{
                                text:'echarts实例'
                            },
                            xAxis: {
                                type: 'category',
                                data: ['苹果', '西瓜', '香蕉', '草莓']
                            },
                            tooltip:{},
                            legend:{
                                data:['销量']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [10, 12, 8, 15],
                                type: 'bar',
                            }]
                        };

                        this.chart.setOption(optionData);

                    }
                }
            }
        }
    })
}

export default {
    install
}
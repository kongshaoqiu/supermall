import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'




import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'


// Vue.use(echarts)

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

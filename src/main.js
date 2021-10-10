import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router/index'
import store from './store/index'
import { setupStore } from './store/index'
import Toast from './components/common/toast/index'
import VueLazyLoad from 'vue-lazyload'
import fastClick from 'fastclick'
import localCache from './common/cache'

Vue.config.productionTip = false
//安装Toast插件
Vue.use(Toast)
// 懒加载
Vue.use(VueLazyLoad)
//解决移动端300毫秒延迟
fastClick.attach(document.body)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


setupStore() //初始化vuex数据



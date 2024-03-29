// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// 导入路由
import router from './router'
import VueResource from "vue-resource"
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Home from "./components/Home.vue
//挂载swiper
// import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueAxios,axios);
// Vue.use(VueAwesomeSwiper);



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})

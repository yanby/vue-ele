import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store/index.js';
import router from './router/index.js';



Vue.config.productionTip = false;//阻止vue在启动时生成生产提示
Vue.prototype.$http = axios; //将axios挂载到vue上面



new Vue({
  el: '#app',
  router,
  store,
  template: "<App />",
  components: { App }
})

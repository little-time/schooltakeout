import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import './lib/viewport.js'
Vue.config.productionTip = false
import store from './lib/store.js'
// axios.defaults.baseURL = 'http://192.168.12.210/';
/* eslint-disable no-new */
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

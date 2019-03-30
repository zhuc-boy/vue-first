// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'
import fetch from '../utils/fetch'
import store from '../src/store/index'
Vue.prototype.$fetch=fetch;
Vue.config.productionTip = false
//fetch.defaults.headers.common['Authentication-Token'] = store.state.token;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from "./store"
import "./assets/icon/iconfont.css"
import "./assets/icon/iconfont.eot"
import "./assets/icon/iconfont.svg"
import "./assets/icon/iconfont.woff"
import * as fliter from './assets/js/fliter.js'
 
Object.keys(fliter).forEach(key => {
    Vue.filter(key, fliter[key])
})

Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

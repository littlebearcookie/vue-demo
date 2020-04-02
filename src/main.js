// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// axios (Vue Ajax)
import vueaxios from 'vue-axios'
import axios from 'axios'
Vue.use(vueaxios,axios)
// qs
import qs from "qs"
Vue.prototype.$qs = qs
// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// vue-session
import VueSession from 'vue-session'
Vue.use(VueSession)
// My Config
import { CONFIG as SiteConfig } from './config'
Vue.prototype.$conf = SiteConfig

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

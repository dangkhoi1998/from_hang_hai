// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import money from 'v-money'
import 'vuetify/dist/vuetify.min.css'
// import List from '@/components/PT_TND/List'
import HTPT from '@/components/PT_TND/F_hanh_trinh_phuong_tien'

Vue.use(Vuetify)
Vue.use(HTPT)
// Vue.use(List)
Vue.use(money, {precision: 4})
Vue.config.productionTip = false
Vue.component(HTPT.name, HTPT)
// Vue.component(List.name, List)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

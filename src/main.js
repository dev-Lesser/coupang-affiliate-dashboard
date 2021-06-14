import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import Meta from 'vue-meta'
Vue.config.productionTip = false

new Vue({
  Meta,
  store,
  router,
  vuetify,

  render: h => h(App)
}).$mount('#app')

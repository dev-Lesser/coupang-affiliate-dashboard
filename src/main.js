import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import Meta from 'vue-meta'
import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.config.productionTip = false

Vue.use(Meta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
new Vue({
  Meta,
  store,
  router,
  vuetify,

  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')

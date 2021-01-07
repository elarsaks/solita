import App from './App.vue'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router/router.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
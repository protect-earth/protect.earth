import Vue from 'vue'
import router from './router'
import './plugins/meta'
import App from './App.vue'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

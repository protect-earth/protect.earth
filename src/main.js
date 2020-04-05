import Vue from 'vue'
import router from './router'
import './plugins/meta'
import './plugins/base'
import App from './App.vue'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false

new Vue({

  provide: () => ({
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.VUE_APP_API_BASE_URL,
  }),

  router,
  render: h => h(App),
}).$mount('#app')

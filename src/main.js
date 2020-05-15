import Vue from 'vue';
import router from './router';
import App from './App.vue';
import './plugins';

new Vue({
  provide: () => ({
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.VUE_APP_API_BASE_URL,
  }),

  router,

  render: h => h(App),
}).$mount('#app');

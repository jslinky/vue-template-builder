import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
// install axios to global Vue instance - access as $http
Vue.prototype.$http = axios

export const editBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')

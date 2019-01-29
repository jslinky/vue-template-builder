import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './framework.less'

Vue.config.productionTip = false
// install axios to global Vue instance - access as $http
Vue.prototype.$http = axios
Vue.prototype.$extendObj = function(copyThis) {
  return Vue.util.extend({}, copyThis)
}
Vue.prototype.$stringObj = function(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export const editBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')


// Flickr API
// Key: 68785a52c56c90de60bdc2f382f9e13a
// Secret: 1cd36ba902502a84
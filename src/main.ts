import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false
//test9

new Vue({
  render: h => h(App),
}).$mount('#app')

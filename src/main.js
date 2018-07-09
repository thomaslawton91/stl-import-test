import Vue from 'vue'
import App from './App.vue'
import VueThreejs from 'vue-threejs'
Vue.use(VueThreejs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

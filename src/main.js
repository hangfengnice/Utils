import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import "element-ui/lib/theme-chalk/index.css";
import './assets/normalize.css'
import ElementUI from "element-ui";
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

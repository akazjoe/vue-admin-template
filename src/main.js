import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import './styles.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

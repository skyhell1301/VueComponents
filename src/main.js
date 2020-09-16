// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VAnimateCss from 'animate.css/animate.css'
import PopUpWindow from './components/PopUpWindow'
import antSys from './components/AntennSystemComponent.vue'

Vue.config.productionTip = false
Vue.use(VAnimateCss, PopUpWindow, antSys)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    VAnimateCss
  },
  template: '<App/>'
})

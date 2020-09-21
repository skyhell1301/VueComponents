import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import PopUpWindow from '../components/PopUpWindow'
import DeviceDisplayComponent from '../components/DeviceDisplayComponent'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/popWin',
      name: 'PopUpWindow',
      component: PopUpWindow
    },
    {
      path: '/devDisp',
      name: 'DeviceDisplayComponent',
      component: DeviceDisplayComponent
    }
  ]
})

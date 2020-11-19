import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import ContainerDeviceComponent from '../components/Devices/ContainerDeviceComponent'
import ClockComponent from '../components/ControlAndIndication/ClockComponent'

Vue.use(VueRouter, ContainerDeviceComponent)

export default new VueRouter({
  routes: [
    {
      path: '/clock',
      name: 'ClockComponent',
      component: ClockComponent
    }
  ]
})

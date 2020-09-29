import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import ContainerDeviceComponent from '../components/ContainerDeviceComponent'

Vue.use(VueRouter, ContainerDeviceComponent)

export default new VueRouter({
  routes: [
    {
      path: '/containerDevice',
      name: 'ContainerDeviceComponent',
      component: ContainerDeviceComponent
    }
  ]
})

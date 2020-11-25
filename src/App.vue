<template>
  <div id="app">
    <NavMenuComponent class="container-nav-menu"></NavMenuComponent>
    <ContainerDeviceComponent class="container-device"></ContainerDeviceComponent>
    <ContainerControlAndIndicationComponent class="container-control-and-indication"></ContainerControlAndIndicationComponent>
  </div>
</template>

<script>
import ContainerDeviceComponent from './components/Devices/ContainerDeviceComponent'
import ContainerControlAndIndicationComponent
  from './components/ControlAndIndication/ContainerControlAndIndicationComponent'
import NavMenuComponent from './components/Menu/NavMenuComponent'
export default {
  name: 'App',
  components: {
    NavMenuComponent,
    ContainerControlAndIndicationComponent,
    ContainerDeviceComponent
  }
}
</script>

<style>
body {
  overflow: hidden;
  margin: 0;
  font-size: 16px;
  display: grid;
  height: 100vh;
  width: 100vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 28% 60% 12%;
  grid-template-rows: 7% 86% 7%;
  //max-width: calc(100vh * 16 / 10);
  max-height: calc(100vw * 10 / 16);
  min-width: 1000px;
  min-height: 625px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
}

.container-device {
  grid-column: 2;
  grid-row: 2;
}

.container-control-and-indication {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column: 3;
}

.container-nav-menu {
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>

<template>
  <div id="app">
    <ContainerDeviceComponent></ContainerDeviceComponent>
  </div>
</template>

<script>
import ContainerDeviceComponent from './components/Devices/ContainerDeviceComponent'
export default {
  name: 'App',
  components: {
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
  grid-template-columns: 25% 60% 15%;
  grid-template-rows: 10% 90%;
  //max-width: calc(100vh * 16 / 10);
  max-height: calc(100vw * 10 / 16);
  min-width: 1000px;
  min-height: 625px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
</style>

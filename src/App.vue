<template>
  <div id="app">
    <ContainerDeviceComponent class="test"></ContainerDeviceComponent>
  </div>
</template>

<script>
import ContainerDeviceComponent from './components/ContainerDeviceComponent'
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
  //min-width: 1200px;
  //min-height: 1000px;
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
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
.test {

}
</style>

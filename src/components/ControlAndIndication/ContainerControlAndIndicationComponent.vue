<template>
  <div class="container-control-and-indication">
<!--    <iframe src="https://youtu.be/VTIEvm_9CH4" width="100%" height="100%"></iframe>-->
    <ClockComponent class="clock"></ClockComponent>
  </div>
</template>

<script>
import ClockComponent from './ClockComponent'
export default {
  name: 'ContainerControlAndIndicationComponent',
  components: {ClockComponent}
}
</script>

<style scoped>
.container-control-and-indication {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7% 10% 13% 10% 10% 10% 30% 13% 7%;
  justify-items: center;
  align-items: center;
}
.clock {
  width: 100%;
  height: 100%;
}
</style>

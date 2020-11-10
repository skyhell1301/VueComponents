<template>
  <div class="container-control-and-indication">
    <iframe class="clock" src="http://10.10.0.16/clock/index.html"></iframe>
    <div class="crash">
      <div class="crash-title">АВАРИЯ</div>
      <ButtonComponent class="btn-1"></ButtonComponent>
      <EmergencySignalComponent class="signal-bell" status="ok"></EmergencySignalComponent>
    </div>
    <div class="ZS">
      <div class="ZS-title">ЗЕМНАЯ СТАНЦИЯ</div>
      <ButtonComponent class="btn-2" @btnClick="test1"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="testVar1"></StatusIndicatorComponent>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent'
import EmergencySignalComponent from './EmergencySignalComponent'
import StatusIndicatorComponent from './StatusIndicatorComponent'
export default {
  name: 'ContainerControlAndIndicationComponent',
  components: {StatusIndicatorComponent, EmergencySignalComponent, ButtonComponent},
  data () {
    return {
      testVar1: false
    }
  },
  methods: {
    test1: function (kek) {
      this.testVar1 = !this.testVar1
    }
  }
}
</script>

<style scoped>
.container-control-and-indication {
  user-select: none;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7% 10% 13% 10% 10% 10% 30% 13% 7%;
  justify-items: center;
  align-items: center;
}
.clock {
  width: 95%;
  height: 100%;
  border: none;
}

.crash {
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 20% 80%;
  width: 95%;
  height: 100%;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
}

.btn-1 {
  grid-row: 2;
  grid-column: 1;
  width: 90%;
  height: 90%;
  align-self: center;
  justify-self: center;
}
.signal-bell {
  grid-row: 2;
  grid-column: 2;
  width: 92%;
  height: 100%;
  align-self: center;
  justify-self: center;
}
.crash-title {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  align-self: center;
  width: 100%;
  font-weight: bold;
}
.ZS {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 70%;
  grid-row: 4;
  width: 95%;
  height: 100%;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
}

.btn-2 {
  grid-row: 2;
  grid-column: 1;
  width: 98%;
  height: 98%;
}

.ind-1 {
  grid-row: 2;
  grid-column: 2;
  width: 98%;
  height: 98%;
}

.ZS-title {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  align-self: center;
  width: 100%;
  font-weight: bold;
}
</style>

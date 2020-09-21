<template>
  <div id="app">
    <div ref="container">
      <DeviceDisplayComponent title-device="АНТЕННАЯ СИСТЕМА" class="elem1">
        <AntennSystemComponent :parameters-in="antennaParameters"></AntennSystemComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent class="elem2">
<!--        <ItemDisplayComponent :parameters-display="parametersInput"></ItemDisplayComponent>-->
      </DeviceDisplayComponent>
      <DeviceDisplayComponent class="elem3">
<!--        <ItemDisplayComponent :parameters-display="parametersInput"></ItemDisplayComponent>-->
      </DeviceDisplayComponent>
      <DeviceDisplayComponent class="elem4">
<!--        <ItemDisplayComponent :parameters-display="parametersInput"></ItemDisplayComponent>-->
      </DeviceDisplayComponent>
    </div>
  </div>
</template>

<script>
import PopUpWindow from './components/PopUpWindow'
import AntennSystemComponent from './components/AntennSystemComponent'
import DeviceDisplayComponent from './components/DeviceDisplayComponent'
import ItemDisplayComponent from './components/ItemDisplayComponent'

export default {
  name: 'App',
  data () {
    return {
      close1: false,
      close2: false,
      scaleActive: false,
      valInput: 'Hey',
      antennaParameters: {
        antennaSignal: '100 дБ',
        azimut: '100 град',
        elevationAngle: '45 град',
        antennaScanner: 'Вкл',
        antennaMode: 'Автомат'
      }
    }
  },
  components: {
    AntennSystemComponent,
    PopUpWindow,
    DeviceDisplayComponent,
    ItemDisplayComponent
  },
  methods: {
    setClose1 () {
      this.close1 = !this.close1
    },
    setClose2 () {
      this.close2 = !this.close2
    },
    test () {
      this.scaleActive = !this.scaleActive
    },
    getEmit (x) {
      this.valInput = x
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.elem1 {
  position: absolute;
  left:20%;
  top: 10%;
}
.elem2 {
  position: absolute;
  left:40%;
  top: 10%;
}
.elem3 {
  position: absolute;
  left:20%;
  top: 40%;
}
.elem4 {
  position: absolute;
  left:40%;
  top: 40%;
}
</style>

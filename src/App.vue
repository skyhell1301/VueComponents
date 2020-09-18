<template>
  <div id="app">
    <div ref="container">
<!--    <div>-->
<!--      <button style="margin: 10px" id="test" @click="setClose1">Open Window 1</button>-->
<!--      <button style="margin: 10px" @click="setClose2">Open Window 2</button>-->
<!--      <button style="margin: 10px" @click="test">{{ valInput }}</button>-->
<!--    </div>-->
      <DeviceDisplayComponent class="elem1">
        <ItemDisplayComponent :parameters-display="parametersInput"></ItemDisplayComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent class="elem2">
        <ItemDisplayComponent :parameters-display="parametersInput"></ItemDisplayComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent class="elem3">
        <ItemDisplayComponent :parameters-display="parametersInput"></ItemDisplayComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent class="elem4">
        <ItemDisplayComponent :parameters-display="parametersInput"></ItemDisplayComponent>
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
      parametersInput: [
        {
          nameParameter: 'Частота (МГц)',
          valueParameter: 100
        },
        {
          nameParameter: 'Ослабление, дБ',
          valueParameter: -3
        },
        {
          nameParameter: 'ВЧ выход',
          valueParameter: '300'
        }
      ]
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

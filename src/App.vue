<template>
  <div id="app">
    <div class="device-container">
<!--      <connection-line-component style="z-index: -10" id_1="10" connection-point_1="bl" id_2="8" connection-point_2="rt"></connection-line-component>-->
      <DeviceDisplayComponent :connection-interface-active="false" id="7" title-device="АНТЕННАЯ СИСТЕМА" class="elem1">
        <AntennSystemComponent :parameters-in="antennaParameters"></AntennSystemComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent id="10" title-device="ТЕСТ-ТРАНСЛЯТОР" class="elem2">
        <TestTranslyatorComponent :parameters-in="testTraslyatorParameters"></TestTranslyatorComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="УМ #1" class="elem3">
        <AmplifierComponent title-device="УМ #1" :parameters-in="amplifier1Parameters"></AmplifierComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent id="8" title-device="УМ #2" class="elem4">
        <AmplifierComponent title-device="УМ #2" :parameters-in="amplifier2Parameters"></AmplifierComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent id="9" title-device="МШУ #1" class="elem5">
        <MSHUComponent title-device="МШУ #1" :parameters-in="MSHU1Parameters"></MSHUComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="МШУ #2" class="elem6">
        <MSHUComponent title-device="МШУ #2" :parameters-in="MSHU2Parameters"></MSHUComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="КОНВЕРТЕР ВВЕРХ #1" class="elem7">
        <UpConverterComponent :parameters-in="UpConverter1Parameters"></UpConverterComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="КОНВЕРТЕР ВВЕРХ #2" class="elem8">
        <UpConverterComponent :parameters-in="UpConverter2Parameters"></UpConverterComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="КОНВЕРТЕР ВНИЗ #1" class="elem9">
        <DownConverterComponent :parameters-in="DownConverter1Parameters"></DownConverterComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="КОНВЕРТЕР ВНИЗ #2" class="elem10">
        <DownConverterComponent :parameters-in="DownConverter2Parameters"></DownConverterComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent class="elem11" title-device="КОНВЕРТЕР ВНИЗ #2"></DeviceDisplayComponent>
      <button @click="testMet">click</button>
    </div>
  </div>
</template>

<script>
import PopUpWindow from './components/PopUpWindow'
import AntennSystemComponent from './components/AntennSystemComponent'
import DeviceDisplayComponent from './components/DeviceDisplayComponent'
import ItemDisplayComponent from './components/ItemDisplayComponent'
import TestTranslyatorComponent from './components/TestTranslyatorComponent'
import AmplifierComponent from './components/AmplifierComponent'
import MSHUComponent from './components/MSHUComponent'
import UpConverterComponent from './components/UpConverterComponent'
import DownConverterComponent from './components/DownConverterComponent'
import ConnectionLineComponent from './components/ConnectionLineComponent'

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
      },
      testTraslyatorParameters: {
        TTfrequency: '100',
        TTattenuation: '20',
        VHout: '1'
      },
      amplifier1Parameters: {
        amplifierMode: 'Токовый',
        outPower: 120,
        carrierBan: 'нет',
        amplifierTemperature: 67
      },
      amplifier2Parameters: {
        amplifierMode: 'Ключевой',
        outPower: 100,
        carrierBan: 'есть',
        amplifierTemperature: 75
      },
      MSHU1Parameters: {
        currentValue: 100,
        currentLimits: 1000,
        voltageA: 220,
        voltageB: 200
      },
      MSHU2Parameters: {
        currentValue: 200,
        currentLimits: 2000,
        voltageA: 225,
        voltageB: 213
      },
      UpConverter1Parameters: {
        frequency: 200,
        attenuation: 25,
        VHout: '2'
      },
      UpConverter2Parameters: {
        frequency: 300,
        attenuation: 15,
        VHout: '1'
      },
      DownConverter1Parameters: {
        frequency: 450,
        attenuation: 15
      },
      DownConverter2Parameters: {
        frequency: 300,
        attenuation: 7
      },
      x1: 10,
      x2: 100,
      y1: 10,
      y2: 100
    }
  },
  components: {
    AntennSystemComponent,
    PopUpWindow,
    DeviceDisplayComponent,
    ItemDisplayComponent,
    TestTranslyatorComponent,
    AmplifierComponent,
    MSHUComponent,
    UpConverterComponent,
    DownConverterComponent,
    ConnectionLineComponent
  },
  methods: {
  },
  mounted () {
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
  max-width: calc(100vh * 16 / 9);
  max-height: calc(100vw * 9 / 16);
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
.device-container {
  grid-column: 2;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
}
.elem1 {
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  //justify-self: center;
  //align-self: center;
}
.elem2 {
  //position: absolute;
  //left:30%;
  //top: 10%;
}
.elem3 {
  //position: absolute;
  //left:10%;
  //top: 40%;
}
.elem4 {
  //position: absolute;
  //left:30%;
  //top: 40%;
}
.elem5 {
  //position: absolute;
  //left:50%;
  //top: 10%;
}
.elem6 {
  //position: absolute;
  //left:50%;
  //top: 40%;
}
.elem7 {
  //position: absolute;
  //left:70%;
  //top: 10%;
}
.elem8 {
  //position: absolute;
  //left:70%;
  //top: 40%;
}
.elem9 {
  //position: absolute;
  //left:10%;
  //top: 60%;
}
.elem10 {
  //position: absolute;
  //left:30%;
  //top: 60%;
}
.elem11 {
  grid-column: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
</style>

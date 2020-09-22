<template>
  <div id="app">
    <svg version="1.1"
         baseProfile="full"
         width="100%" height="100%"
         xmlns="http://www.w3.org/2000/svg"
         style="position: absolute; top: 0px; left: 0px"
    >

      <rect width="100%" height="100%" fill="red" />

      <circle cx="50%" cy="50%" r="50%" fill="green" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      <line :x1="x1" :x2="x2" :y1="y1" :y2="y2" stroke="orange" stroke-width="15px"/>
    </svg>
    <div class="device-container">
      <DeviceDisplayComponent id="7" title-device="АНТЕННАЯ СИСТЕМА" class="elem1">
        <AntennSystemComponent :parameters-in="antennaParameters"></AntennSystemComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="ТЕСТ-ТРАНСЛЯТОР" class="elem2">
        <TestTranslyatorComponent :parameters-in="testTraslyatorParameters"></TestTranslyatorComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="УМ #1" class="elem3">
        <AmplifierComponent title-device="УМ #1" :parameters-in="amplifier1Parameters"></AmplifierComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent id="8" title-device="УМ #2" class="elem4">
        <AmplifierComponent title-device="УМ #2" :parameters-in="amplifier2Parameters"></AmplifierComponent>
      </DeviceDisplayComponent>
      <DeviceDisplayComponent title-device="МШУ #1" class="elem5">
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
    </div>
    <button @click="testMet">click</button>
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
    DownConverterComponent
  },
  methods: {
    testMet () {
      let a = document.getElementById('7')
      a.style.top = '5%'
    },
    upt () {
      console.log(document.getElementById('7').getBoundingClientRect().x)
    }
  },
  mounted () {
    let a = document.getElementById('7').getBoundingClientRect()
    let b = document.getElementById('8').getBoundingClientRect()
    console.log(a)
    this.x1 = a.x + (a.width / 2)
    this.y1 = a.y + (a.height)
    this.x2 = b.x + (a.width / 2)
    this.y2 = b.y
    console.log(b)
    document.addEventListener('mousemove', this.upt)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.device-container {
  //transform: scale(1);
  display: flex;
  align-items: stretch;
  width: 1000px;
  height: 1000px;
}
.elem1 {
  position: absolute;
  left:10%;
  top: 10%;
}
.elem2 {
  position: absolute;
  left:30%;
  top: 10%;
}
.elem3 {
  position: absolute;
  left:10%;
  top: 40%;
}
.elem4 {
  position: absolute;
  left:30%;
  top: 40%;
}
.elem5 {
  position: absolute;
  left:50%;
  top: 10%;
}
.elem6 {
  position: absolute;
  left:50%;
  top: 40%;
}
.elem7 {
  position: absolute;
  left:70%;
  top: 10%;
}
.elem8 {
  position: absolute;
  left:70%;
  top: 40%;
}
.elem9 {
  position: absolute;
  left:10%;
  top: 60%;
}
.elem10 {
  position: absolute;
  left:30%;
  top: 60%;
}
</style>

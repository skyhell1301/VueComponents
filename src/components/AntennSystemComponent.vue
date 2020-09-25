<template>
  <div class="wrapper_antenna-system" @dblclick="openWindow"
        :style="'font-size: ' + fz + 'px'"
       :id="'AntennaParameters' + ID"
  >
    <div class="table_parameters"
         v-for="param in parametersDisplay"
         :key="param.id">
        <div class="param-td">{{ param.nameParameter }}</div>
        <div class="value-td">{{ param.valueParameter }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import PopUpWindow from './PopUpWindow'

export default {
  name: 'AntennaSystemComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      titleDevice: 'АНТЕННАЯ СИСТЕМА',
      isOpenWindow: false,
      fz: '',
      parametersDisplay: [
        {
          nameParameter: 'Сигнал',
          valueParameter: this.parametersIn.antennaSignal
        },
        {
          nameParameter: 'Азимут',
          valueParameter: this.parametersIn.azimut
        },
        {
          nameParameter: 'Угол мета',
          valueParameter: this.parametersIn.elevationAngle
        },
        {
          nameParameter: 'Сканер',
          valueParameter: this.parametersIn.antennaScanner
        },
        {
          nameParameter: 'Режим',
          valueParameter: this.parametersIn.antennaMode
        }
      ]
    }
  },
  props: {
    parametersIn: {
      type: Object
    }
  },
  methods: {
    openWindow () {
      if (!this.isOpenWindow) {
        let popWin = new Vue(PopUpWindow)
        popWin.$root.active = true
        popWin.$root.title = this.titleDevice
        popWin.$on('clickClose', this.updateWindowStatus)
        popWin.$mount()
        let b = document.getElementById('AntennaParameters' + this.ID).cloneNode(true)
        popWin.$el.getElementsByClassName('content-clot').item(0).append(b)
        document.getElementById('app').appendChild(popWin.$el)
        this.updateWindowStatus()
      }
    },
    reFontSize () {
      this.fz = this.$el.getBoundingClientRect().height * 0.09
    },
    updateWindowStatus () {
      this.isOpenWindow = !this.isOpenWindow
    }
  },
  mounted () {
    this.reFontSize()
    window.addEventListener('resize', this.reFontSize)
  }
}
</script>

<style scoped>
.wrapper_antenna-system {
  display: grid;
  width: 100%;
  height: 100%;
}

.table_parameters {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 50% 50%;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  text-align: left;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  height: 100%;
}

.param-td {
  margin-left: 10%;
}

.value-td {
  margin-right: 10%;
  text-align: right;
}
</style>

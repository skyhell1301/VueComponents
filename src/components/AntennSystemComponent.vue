<template>
  <div class="wrapper_antenna-system" @dblclick="openWindow">
    <table :id="'tableAntennaParameters' + ID" class="table_parameters">
      <tr v-for="param in parametersDisplay"
          :key="param.id"
      >
        <td class="param-td">{{ param.nameParameter }}</td>
        <td class="value-td">{{ param.valueParameter }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import PopUpWindow from './PopUpWindow'
// import DeviceDisplayComponent from './DeviceDisplayComponent'

export default {
  name: 'AntennSystemComponent',
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
        let b = document.getElementById('tableAntennaParameters' + this.ID).cloneNode(true)
        popWin.$el.appendChild(b)
        document.getElementById('app').appendChild(popWin.$el)
        this.updateWindowStatus()
      }
    },
    updateWindowStatus () {
      this.isOpenWindow = !this.isOpenWindow
    }
  }
}
</script>

<style scoped>
.wrapper_antenna-system {
}

.table_parameters {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  text-align: left;
  white-space: nowrap;
  width: 100%;
  height: 100%;
}

.param-td {
  padding: 3%;
}

.value-td {
  padding: 3%;
  text-align: right;
}
</style>

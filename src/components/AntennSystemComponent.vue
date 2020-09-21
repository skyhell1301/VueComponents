<template>
  <div class="wrapper_antenna-system" @dblclick="openWindow">
    <table id="table-antenna-parameters-id" class="table_parameters">
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
        let b = document.getElementById('table-antenna-parameters-id').cloneNode(true)
        // let test = new Vue(DeviceDisplayComponent)
        // test.$mount()
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
  width: 200px;
  height: 200px; //border: 1px solid black; margin: 0 auto;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  text-align: left;
  white-space: nowrap;
}

.param-td {
  padding: 3%;
}

.value-td {
  padding: 3%;
  margin-right: 10%;
  text-align: right;
}
</style>

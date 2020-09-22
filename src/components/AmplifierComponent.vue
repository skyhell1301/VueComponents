<template>
  <div class="wrapper_amplifier" @dblclick="openWindow">
    <table :id="'tableAmplifierParameters' + ID" class="table_amplifier-parameters">
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

export default {
  name: 'amplifierComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      isOpenWindow: false,
      parametersDisplay: [
        {
          nameParameter: 'Режим',
          valueParameter: this.parametersIn.amplifierMode
        },
        {
          nameParameter: 'Вых. мощность (Вт)',
          valueParameter: this.parametersIn.outPower
        },
        {
          nameParameter: 'Запрет несущей',
          valueParameter: this.parametersIn.carrierBan
        },
        {
          nameParameter: 't °C(вх,вых Δ)',
          valueParameter: this.parametersIn.amplifierTemperature
        }
      ]
    }
  },
  props: {
    parametersIn: {
      type: Object
    },
    titleDevice: {
      type: String,
      default: 'УМ'
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
        let b = document.getElementById('tableAmplifierParameters' + this.ID).cloneNode(true)
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
.wrapper_amplifier {
}
.table_amplifier-parameters {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  text-align: left;
  white-space: nowrap;
  width: 100%;
}
.param-td {
  padding: 3%;
}

.value-td {
  padding: 3%;
  text-align: right;
}
</style>

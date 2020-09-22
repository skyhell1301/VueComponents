<template>
  <div class="wrapper_upConverter" @dblclick="openWindow">
    <table id="table-upConverter-parameters-id" class="table_upConverter-parameters">
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
  name: 'UpConverterComponent',
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
          nameParameter: 'Частота (МГц)',
          valueParameter: this.parametersIn.frequency
        },
        {
          nameParameter: 'Ослабление (дБ)',
          valueParameter: this.parametersIn.attenuation
        },
        {
          nameParameter: 'ВЧ выход',
          valueParameter: this.parametersIn.VHout
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
      default: 'КОНВЕРТЕР ВВЕРХ'
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
        let b = document.getElementById('table-upConverter-parameters-id').cloneNode(true)
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
.wrapper_upConverter {
}
.table_upConverter-parameters {
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

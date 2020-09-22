<template>
  <div class="wrapper_test-translyator" @dblclick="openWindow">
    <table :id="'tableTestTranslyatorParameters' + ID" class="table_test-translyator-parameters">
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
  name: 'TestTranslyatorComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      titleDevice: 'ТЕСТ-ТРАНСЛЯТОР',
      isOpenWindow: false,
      parametersDisplay: [
        {
          nameParameter: 'Частота (МГц)',
          valueParameter: this.parametersIn.TTfrequency
        },
        {
          nameParameter: 'Ослабление (дБ)',
          valueParameter: this.parametersIn.TTattenuation
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
        let b = document.getElementById('tableTestTranslyatorParameters' + this.ID).cloneNode(true)
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
.wrapper_test-translyator {
}

.table_test-translyator-parameters {
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

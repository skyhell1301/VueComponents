<template>
  <div class="wrapper_parameters" @dblclick="openWindow"
       :style="'font-size: ' + fz + 'px'"
       :id="'Parameters-' + ID"
  >
    <div class="table_parameters"
         v-for="param in deviceData.deviceParameters"
         :key="param.id">
      <div class="param">{{ param.nameParameter }}</div>
      <div class="value">{{ param.valueParameter }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import PopUpWindow from './PopUpWindow'

export default {
  name: 'DisplayParametersComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      titleDevice: this.deviceData.title,
      isOpenWindow: false,
      fz: ''
    }
  },
  props: {
    deviceData: {
      type: Object
    },
    fontSizeCoefficient: {
      type: Number,
      default: 0.09
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
        let content = document.getElementById('Parameters-' + this.ID).cloneNode(true)
        popWin.$el.getElementsByClassName('content-clot').item(0).append(content)
        document.getElementById('app').appendChild(popWin.$el)
        this.updateWindowStatus()
      }
    },
    reFontSize () {
      this.fz = this.$el.getBoundingClientRect().height * this.fontSizeCoefficient
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
.wrapper_parameters {
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

.param {
  margin-left: 10%;
}

.value {
  margin-right: 10%;
  text-align: right;
}
</style>

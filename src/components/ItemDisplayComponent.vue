<template>
  <div class="wrapper_item-display-component" @dblclick="openWindowStatus">
    <table id="test" class="table_parameters">
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
import PopUpWindow from './PopUpWindow'
import Vue from 'vue'
import DeviceDisplayComponent from './DeviceDisplayComponent'

export default {
  name: 'ItemDisplayComponent',
  components: {DeviceDisplayComponent, PopUpWindow},
  props: {
    titleDevice: {
      type: String,
      default: 'TITLE'
    },
    parametersDisplay: {
      type: Array
    }
  },
  data () {
    return {
      isOpenWindow: false
    }
  },
  methods: {
    openWindowStatus () {
      if (!this.isOpenWindow) {
        let popWin = new Vue(PopUpWindow)
        popWin.$root.active = true
        popWin.$root.title = this.titleDevice
        // popWin.$root.isResizable = false
        popWin.$on('clickClose', this.updateWindowStatus)
        popWin.$mount()
        let b = document.getElementById('test').cloneNode(true)
        popWin.$el.appendChild(b)
        document.getElementById('app').appendChild(popWin.$el)
        this.updateWindowStatus()
      }
    },
    updateWindowStatus () {
      this.isOpenWindow = !this.isOpenWindow
    }
  },
  created () {
  }
}
</script>

<style scoped>
.wrapper_item-display-component {
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

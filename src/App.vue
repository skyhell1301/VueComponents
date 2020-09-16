<template>
  <div id="app">
    <div>
      <button id="test" @click="setClose1">Open Window 1</button>
      <button @click="setClose2">Open Window 2</button>
      <button @click="test">{{valInput}}</button>
      <PopUpWindow v-bind:active="close2" title="Client 2" v-on:clickClose="setClose2">
        <antenn-system-component val-input="valInput" v-on:update="getEmit"></antenn-system-component>
      </PopUpWindow>
    </div>
  </div>
</template>

<script>
import antSys from './components/AntennSystemComponent.vue'
import PopUpWindow from './components/PopUpWindow'
import AntennSystemComponent from './components/AntennSystemComponent'
export default {
  name: 'App',
  data () {
    return {
      close1: false,
      close2: false,
      scaleActive: false,
      zInd1: 1000,
      zInd2: 1001,
      valInput: 'Hey'
    }
  },
  components: {
    AntennSystemComponent,
    PopUpWindow,
    antSys
  },
  methods: {
    setClose1 () {
      this.close1 = !this.close1
    },
    setClose2 () {
      this.close2 = !this.close2
    },
    test () {
      this.scaleActive = !this.scaleActive
    },
    getEmit (x) {
      this.valInput = x
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.test {
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 30px;
  animation-iteration-count: infinite;
}
.scaled {
  transform: scale(1.5); /* Equal to scaleX(0.7) scaleY(0.7) */
}
.test {
  background-color: #f7f7f7;
}
.vdr.active:before{
  outline: 1px solid #d6d6d6;
  overflow: visible;
}
.vdr-stick {
  box-sizing: border-box;
  position: absolute;
  font-size: 1px;
  background: none;
  border: none;
  box-shadow: none;
}
</style>

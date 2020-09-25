<template>
  <div class="wrapper_device-display-component" :class="{'connection-interface-active': !connectionInterfaceActive}">
    <div v-if="connectionInterfaceActive" class="connection_interface">
      <svg class="connection_interface__svg" viewBox="0 0 500 40" preserveAspectRatio="none">
        <linearGradient id="my-cool-gradient" x1="0%" y1="57%" x2="81%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(55, 51, 51);stop-opacity:1;" />
          <stop offset="100%" style="stop-color:rgb(111, 111, 111);stop-opacity:1;" />
        </linearGradient>
        <path class="connection_interface__path" d="M 0 40 C 20 0 20 0 40 0 L 460 0 C 480 0 480 0 500 40 L 0 40 Z"></path>
      </svg>
    </div>
    <div class="device_body">
      <div class="device_body__header">
        <div class="title_device" :style="'font-size: ' + fz + 'px'">{{titleDevice}}</div>
      </div>
      <div class="device_display">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DeviceDisplayComponent',
  data () {
    return {
      fz: 10
    }
  },
  props: {
    titleDevice: {
      type: String,
      default: 'TITLE'
    },
    connectionInterfaceActive: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    reFontSize: function () {
      const WCurrentText = this.$el.getElementsByClassName('title_device').item(0).getBoundingClientRect().width
      const HCurrentContainer = this.$el.getElementsByClassName('device_body__header').item(0).getBoundingClientRect().height
      // const HCurrentText = this.$el.getElementsByClassName('title_device').item(0).getBoundingClientRect().height
      let Wtext = this.$el.getElementsByClassName('device_body__header').item(0).getBoundingClientRect().width * 0.9
      // let Htext = this.$el.getElementsByClassName('device_body__header').item(0).getBoundingClientRect().height * 0.9
      if (Math.abs(Wtext - WCurrentText) > WCurrentText * 0.05) {
        this.fz = Wtext > WCurrentText ? this.fz + HCurrentContainer * 0.05 : this.fz - HCurrentContainer * 0.05
        if (this.fz > 14) {
          setTimeout(this.reFontSize, 5)
        }
      }
    }
  },
  mounted () {
    this.reFontSize()
    window.addEventListener('resize', this.reFontSize)
  },
  watch: {
  },
  updated () {
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.reFontSize)
  }
}
</script>

<style scoped>
.wrapper_device-display-component {
  display: grid;
  grid-template-rows: 5% 95%;
}
.wrapper_device-display-component.connection-interface-active {
  grid-template-rows: 100%;
}
.connection_interface {
  position: relative;
  width: 85%;
  height: 100%;
  align-self: center;
  justify-self: center;
  linear-gradient: rgb(32, 33, 46), rgb(38, 39, 51);
}

.connection_interface__svg {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.connection_interface__path {
  fill: url(#my-cool-gradient);
}
.device_body {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 9fr;
  background: linear-gradient(135deg, rgba(235,235,235,1) 0%, rgba(128,128,128,1) 61%, rgba(166,166,166,1) 100%);
  box-shadow: 0px 0px 5px 1px rgba(148,148,148,0.71);
}
.device_body__header {
  grid-row: 1;
  grid-column: 1;
  //height: 65%;
  width: 75%;
  display: grid;
  align-self: center;
  justify-self: center;
  border: 0.05rem solid rgba(77,83,79,0.75);
  border-radius: 7px;
  background: linear-gradient(to right, rgba(229,249,255,1) 0%, rgba(255,255,255,0.98) 47%, rgba(255,255,255,0.98) 62%, rgba(229,249,255,0.96) 100%);
}
.title_device {
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  justify-self: center;
  white-space: nowrap;
  font-weight: bold;
  font-stretch: semi-condensed;
  font-family: "sans-serif";
}
.device_display {
  grid-row: 2;
  width: 95%;
  height: 97%;
  justify-self: center;
  background: linear-gradient(275deg, rgb(158, 158, 158) 0%, rgb(247, 247, 247) 100%);
  box-shadow: inset 0px 0px 8px -1px rgba(51,51,51,1);
}
</style>

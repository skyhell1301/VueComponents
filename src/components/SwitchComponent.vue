<template>
  <div class="switch-container" @click="rotateStart">
    <div class="background-div"></div>
    <div class="background-rectangle"></div>
    <svg class="svg-element" viewBox="0 0 50 50" preserveAspectRatio="none">
<!--      <defs>-->
<!--        <linearGradient id="Gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">-->
<!--          <stop offset="0%" style="stop-color: rgb(235,235,235)"/>-->
<!--          <stop offset="100%" style="stop-color: rgb(166,166,166)"/>-->
<!--        </linearGradient>-->
<!--        <filter id="f1" x="0" y="0" width="100%" height="100%">-->
<!--          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />-->
<!--          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />-->
<!--          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />-->
<!--        </filter>-->
<!--      </defs>-->
<!--&lt;!&ndash;      <path class="background"&ndash;&gt;-->
<!--&lt;!&ndash;            d="M 0 13.75 C 0 13.75 0 7.5 3.75 3.75 C 7.5 0 13.75 0 13.75 0 L 36.25 0 C 36.25 0 42.5 0 46.25 3.75 C 50 7.5 50 13.75 50 13.75 L 50 36.25 C 50 36.25 50 42.5 46.25 46.25 C 42.5 50 36.25 50 36.25 50 L 13.75 50 C 13.75 50 7.5 50 3.75 46.25 C 0 42.5 0 36.25 0 36.25 L 0 13.75 Z"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--      <path class="rectangle-background"-->
<!--            filter="url(#f1)"-->
<!--            d="M 3 15.1 C 3 15.1 3 9.6 6.3 6.3 C 9.6 3 15.1 3 15.1 3 L 34.9 3 C 34.9 3 40.4 3 43.7 6.3 C 47 9.6 47 15.1 47 15.1 L 47 34.9 C 47 34.9 47 40.4 43.7 43.7 C 40.4 47 34.9 47 34.9 47 L 15.1 47 C 15.1 47 9.6 47 6.3 43.7 C 3 40.4 3 34.9 3 34.9 L 3 15.1 Z"-->
<!--      />-->
      <g :id="'rotate-' + ID">
        <path class="arc-line" d="M 0 25 C 15 25 25 15 25 0"></path>
        <path class="arc-line" d="M 25 50 C 25 35 35 25 50 25"></path>
        <circle :id="ID" class="switch-motion-object" style="fill: rgba(134, 218, 82, 0.9);" cx="4" cy="4" r="4"></circle>
      </g>
      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 7px; white-space: pre;" x="17" y="26">1</text>
      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 7px; white-space: pre;" x="24" y="19">2</text>
      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 7px; white-space: pre;" x="31" y="26">3</text>
      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 7px; white-space: pre;" x="24" y="34">4</text>
    </svg>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
export default {
  name: 'SwitchComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      pathForLine1: 'M 0 25 C 15 25 25 15 25 0',
      pathForLine2: 'M 25 50 C 25 35 35 25 50 25',
      rotateValue: 0
    }
  },
  props: {
    animationDuration: {
      type: Number,
      default: 5
    },
    port_in_1: {
      type: Number
    },
    port_in_2: {
      type: Number
    }
  },
  methods: {
    rotateStart () {
      gsap.set('#' + 'rotate-' + this.ID, {transformOrigin: '50% 50%'})
      this.rotateValue = this.rotateValue === 90 ? 0 : 90
      gsap.to('#' + 'rotate-' + this.ID, {duration: 1, repeat: 0, rotation: this.rotateValue})
    },
    startAnimation () {
      gsap.set('#' + this.ID, {xPercent: -50, yPercent: -50, transformOrigin: '50% 50%', opacity: 1})
      let move = gsap.to('#' + this.ID, {duration: this.animationDuration, repeat: 0, motionPath: this.pathForLine1, ease: 'linear', runBackwards: true})
      move.eventCallback('onComplete', this.endAnimation)
    },
    endAnimation () {
      gsap.set('#' + this.ID, {opacity: 0})
      this.$emit('onComplete')
    }
  },
  mounted () {
    gsap.registerPlugin(MotionPathPlugin)
  }
}
</script>

<style scoped>
.switch-container {
  display: grid;
  position: relative;
  cursor: default;
}
.svg-element {
  grid-row: 1;
  grid-column: 1;
  height: 100%;
  width: 100%;
}
.background-div {
  height: 100%;
  width: 100%;
  grid-row: 1;
  grid-column: 1;
  background: linear-gradient(135deg, rgba(235,235,235,1) 0%, rgb(123, 122, 122) 61%, rgba(166,166,166,1) 100%);
  box-shadow: 0px 0px 2px 1px rgba(148,148,148,0.71);
  border-radius: 25%;
}
.background-rectangle {
  grid-row: 1;
  grid-column: 1;
  width: 85%;
  height: 85%;
  justify-self: center;
  align-self: center;
  background: linear-gradient(45deg, rgb(158, 158, 158) 0%, rgb(247, 247, 247) 100%);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
  border-radius: 25%;
}
.arc-line {
  stroke: black;
  stroke-width: 2px;
  shape-rendering: geometricPrecision;
  fill: none;
}
.switch-motion-object {
  opacity: 0;
}
</style>

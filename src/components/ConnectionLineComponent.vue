<template>
  <g class="connect-line-component" id="connect-line-component-id">
    <path :d="pathForLine" class="path-line"/>
    <circle :id="ID" class="motion-object" style="fill: rgba(134, 218, 82, 0.9);" cx="4" cy="4" r="4"></circle>
  </g>
</template>

<script>
import { gsap } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
export default {
  name: 'ConnectionLineComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      x1: '',
      x2: '',
      variableX: '',
      variableY: '',
      y1: '',
      y2: '',
      widthCoefficient: '',
      heightCoefficient: '',
      deltaX: '',
      deltaY: '',
      object_1: '',
      object_2: '',
      widthSVG: '',
      heightSVG: '',
      xSvg: '',
      ySvg: '',
      coordinateArray: [],
      pathForLine: ''
    }
  },
  props: {
    id_1: {
      type: String
    },
    id_2: {
      type: String
    },
    // (точка соединения объекта) connectionPoint = {side: 'left', percent: 50}
    // side - сторона (left, top, right, bottom)
    // percent - процент от длины стороны
    // Пример: {side: 'left', percent: 50} - левая сторона объекта, 50% от высоты объекта
    connectionPoint_1: {
      type: Object,
      default: function () {
        return {side: 'bottom', percent: 50}
      }
    },
    connectionPoint_2: {
      type: Object,
      default: function () {
        return {side: 'top', percent: 50}
      }
    },
    pointEdgesArray: {
      type: Array
    },
    activeAnimation: {
      type: Boolean,
      default: false
    },
    animationDuration: {
      type: Number,
      default: 5
    }
  },
  watch: {
    activeAnimation: function () {
      if (this.activeAnimation) {
        this.startAnimation()
      } else {
        this.stopAnimation()
      }
    }
  },
  methods: {
    updateLine: function () {
      this.stopAnimation()
      let coordinate1 = this.calculateCoordinates(this.object_1, this.connectionPoint_1)
      let coordinate2 = this.calculateCoordinates(this.object_2, this.connectionPoint_2)
      this.xSvg = document.getElementById('line-container-id').getBoundingClientRect().x
      this.ySvg = document.getElementById('line-container-id').getBoundingClientRect().y
      this.widthSVG = document.getElementById('line-container-id').getBoundingClientRect().width
      this.heightSVG = document.getElementById('line-container-id').getBoundingClientRect().height
      this.x1 = coordinate1.x - this.xSvg
      this.y1 = coordinate1.y - this.ySvg
      this.x2 = coordinate2.x - this.xSvg
      this.y2 = coordinate2.y - this.ySvg
      this.updateDeltaFlag()
      this.createPathLine()
      if (this.activeAnimation) {
        this.startAnimation()
      }
    },
    calculateCoordinates (obj, point) {
      let x = obj.getBoundingClientRect().x
      let y = obj.getBoundingClientRect().y
      let widthObj = obj.getBoundingClientRect().width
      let heightObj = obj.getBoundingClientRect().height
      switch (point.side) {
        case 'top': {
          x += widthObj * point.percent / 100
          break
        }
        case 'right': {
          x += widthObj
          y += heightObj * point.percent / 100
          break
        }
        case 'left': {
          y += heightObj * point.percent / 100
          break
        }
        case 'bottom': {
          x += widthObj * point.percent / 100
          y += heightObj
          break
        }
      }
      return {x, y}
    },
    calculateWidthAndHeightCoefficients () {
      let currentDelta = this.getCurrentDelta()
      this.widthCoefficient = currentDelta.X * 100 / this.deltaX / 100
      this.heightCoefficient = currentDelta.Y * 100 / this.deltaY / 100
    },
    getCurrentDelta () {
      return {X: Math.abs(this.x1 - this.x2), Y: Math.abs(this.y1 - this.y2)}
    },
    updateDeltaFlag () {
      this.deltaX = Math.abs(this.x1 - this.x2)
      this.deltaY = Math.abs(this.y1 - this.y2)
    },
    getStraightLineEquation () {
      let p1 = 'M10 10 L 100 100 L 200 200'
      let p2 = 'M100 10 L 10 100'
      const {ShapeInfo, Intersection} = require('kld-intersections')
      const path1 = ShapeInfo.path(p1)
      const path2 = ShapeInfo.path(p2)
      const intersections = Intersection.intersect(path1, path2)
      let x1 = path1.args[0].args[0].x
      let y1 = path1.args[0].args[0].y
      let x2 = path1.args[0].args[1].x
      let y2 = path1.args[0].args[1].y
      let k = (y1 - y2) / (x1 - x2)
      let b = y2 - k * x2
      for (let i = 0; i <= x2; i++) {
      }
      console.log('y = ' + k + 'x + ' + b)
      console.log(intersections)
    },
    createPathLine () {
      this.coordinateArray = []
      this.coordinateArray.push({x: this.x1, y: this.y1})
      this.pathForLine = 'M' + this.x1 + ' ' + this.y1
      let x = this.x1
      let y = this.y1
      for (let point of this.pointEdgesArray) {
        switch (point.direction) {
          case 'left': {
            x -= point.value / 100 * this.deltaX
            break
          }
          case 'up': {
            y -= point.value / 100 * this.deltaY
            break
          }
          case 'down': {
            y += point.value / 100 * this.deltaY
            break
          }
          case 'right': {
            x += point.value / 100 * this.deltaX
            break
          }
        }
        this.coordinateArray.push({x: x, y: y})
        this.pathForLine += ' L ' + x + ' ' + y
      }
      this.coordinateArray.push({x: this.x2, y: this.y2})
      this.pathForLine += ' L ' + this.x2 + ' ' + this.y2
    },
    startAnimation () {
      gsap.set('#' + this.ID, {xPercent: -50, yPercent: -50, transformOrigin: '50% 50%', opacity: 1})
      gsap.to('#' + this.ID, {duration: this.animationDuration, repeat: -1, motionPath: this.pathForLine, ease: 'linear'})
    },
    stopAnimation () {
      gsap.killTweensOf('#' + this.ID)
      gsap.set('#' + this.ID, {opacity: 0})
    }
  },
  mounted () {
    this.object_1 = document.getElementById(this.id_1)
    this.object_2 = document.getElementById(this.id_2)
    gsap.registerPlugin(MotionPathPlugin)
    this.updateLine()
    window.addEventListener('resize', this.updateLine)
  }
}
</script>

<style scoped>
.connect-line-component {
  width: 100%;
  height: 100%;
}
.path-line {
  stroke: black;
  stroke-width: 2px;
  fill: none;
}

.motion-object {
  width: 10px;
  height: 10px;
  fill: hotpink;
  border: 1px;
}
</style>

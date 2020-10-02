<template>
  <g class="connect-line-component" id="connect-line-component-id">
    <path :d="pathForLine" stroke="black" stroke-width="2px" fill="none"/>
    <rect id="kek" class="motion-object">
    </rect>
    <circle class="my-circle" r="30" cx="50" cy="50" fill="orange" />
  </g>
</template>

<script>
export default {
  name: 'ConnectionLineComponent',
  data () {
    return {
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
      pathForLine: '',
      edgesSum: this.edgesCount
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
    edgesCount: {
      type: Number,
      default: 0
    },
    pointEdgesArray: {
      type: Array
    }
  },
  watch: {
  },
  methods: {
    updateLine: function () {
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
      let curentDelta = this.getCurrentDelta()
      this.widthCoefficient = curentDelta.X * 100 / this.deltaX / 100
      this.heightCoefficient = curentDelta.Y * 100 / this.deltaY / 100
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
        // console.log(k * i + b)
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
      // let obj = document.getElementById('kek')
      // console.log(document.getElementById('kek'))
      // obj.style.transform = 'translate3d(' + this.x1 + 'px, ' + this.y1 + 'px, 0px)'
      // obj.style.transform = 'translate3d(' + this.x1 + 'px, 0px, 0px)'
      // for (let i = 0; i < this.coordinateArray.length; i++) {
      //   obj.style.transform = 'translate(' + this.coordinateArray[i].x + 'px, ' + this.coordinateArray[i].y + 'px)'
      // }
      document.getElementById('connect-line-component-id').style.setProperty('--path-animation', this.pathForLine)
    }
  },
  mounted () {
    this.object_1 = document.getElementById(this.id_1)
    this.object_2 = document.getElementById(this.id_2)
    this.updateLine()
    window.addEventListener('resize', this.updateLine)
    // this.getStraightLineEquation()
  }
}
</script>

<style scoped>
.connect-line-component {
  --path-animation: 'M644.8125 64.4766 L 635.141 64.4766 L 635.141 162.007 L 441.703 162.007 L 441.703 241.805 L 451.375 241.805';
  width: 100%;
  height: 100%;
}
.motion-object {
  //transition: transform 3s;
  //transform: translate3d(500px, 0px, 0px);
  width: 10px;
  height: 10px;
  fill: hotpink;
  border-radius: 50%;
}
.motion-object {
  //offset-path: path(var(--path-animation)); /* this is a square path */
  //animation: move 2s ease infinite;
}
.my-circle {
  animation: move 2s ease infinite;
}
@keyframes move {
  0% {
    //offset-distance: 0%;
    transform: translate3d(0px, 0px, 0px);
  }
  100% {
    transform: translate3d(500px, 0px, 0px);
    //offset-distance: 100%;
  }
}
</style>

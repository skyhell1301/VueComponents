<template>
  <svg
    baseProfile="full"
    :width="widthSVG"
    :height="heightSVG"
    :style="'top: ' + topSVG + 'px; left: ' + leftSVG + 'px'"
    style="position: absolute; z-index: 0"
  >
    <path :d="pathForLine" stroke="black" stroke-width="3px"/>
<!--    <line :x1="x1" :x2="x2" :y1="y1" :y2="y2" stroke="orange" stroke-width="10px"/>-->
  </svg>
</template>

<script>
export default {
  name: 'ConnectionLineComponent',
  data () {
    return {
      x1: '',
      x2: '',
      y1: '',
      y2: '',
      object_1: '',
      object_2: '',
      widthSVG: '100%',
      heightSVG: '100%',
      topSVG: 0,
      leftSVG: 0,
      pathForLine: '',
      edgesCount: 2
    }
  },
  props: {
    id_1: {
      type: String
    },
    id_2: {
      type: String
    },
    // (точка соединения объекта) connectionPoint = 'tl' - верх-слева, 'tm' - верх-середина, 'tr' - верх-справа
    // 'rt' - право-верх, 'rm' - право-середина, 'rb' - право-низ
    // 'bl' - низ-слева, 'bm' - низ-середина, 'br' - низ-справа
    // 'lt' - слева-верх, 'lm' - слева-середина, 'lb' - слева-низ
    connectionPoint_1: {
      type: String,
      default: 'bm'
    },
    connectionPoint_2: {
      type: String,
      default: 'tm'
    }
  },
  watch: {
  },
  methods: {
    updateLine () {
      let coordinate1 = this.calcСoordinates(this.object_1, this.connectionPoint_1)
      let coordinate2 = this.calcСoordinates(this.object_2, this.connectionPoint_2)

      let x2 = this.object_2.getBoundingClientRect().x + (this.object_2.getBoundingClientRect().width / 2)
      let y2 = this.object_2.getBoundingClientRect().y
      this.widthSVG = Math.abs(coordinate1.x - coordinate2.x)
      this.heightSVG = Math.abs(coordinate1.y - coordinate2.y)
      this.leftSVG = coordinate1.x > coordinate2.x ? coordinate2.x : coordinate1.x
      this.topSVG = coordinate1.y > coordinate2.y ? coordinate2.y : coordinate1.y
      this.x1 = coordinate1.x > x2 ? this.widthSVG : 0
      this.y1 = coordinate1.y > y2 ? this.heightSVG : 0
      this.x2 = coordinate2.x > coordinate1.x ? this.widthSVG : 0
      this.y2 = coordinate2.y > coordinate1.y ? this.heightSVG : 0
      this.pathForLine = 'M' + this.x1 + ' ' + this.y1 + ' L ' + this.x2 + ' ' + this.y2
    },
    calcСoordinates (obj, point) {
      let x = obj.getBoundingClientRect().x
      let y = obj.getBoundingClientRect().y
      switch (point) {
        case 'tl': {
          x += obj.getBoundingClientRect().width * 0.25
          break
        }
        case 'tm': {
          x += obj.getBoundingClientRect().width * 0.5
          break
        }
        case 'tr': {
          x += obj.getBoundingClientRect().width * 0.75
          break
        }
        case 'rt': {
          x += obj.getBoundingClientRect().width
          y += obj.getBoundingClientRect().height * 0.25
          break
        }
        case 'rm': {
          x += obj.getBoundingClientRect().width
          y += obj.getBoundingClientRect().height * 0.5
          break
        }
        case 'rb': {
          x += obj.getBoundingClientRect().width
          y += obj.getBoundingClientRect().height * 0.75
          break
        }
        case 'br': {
          x += obj.getBoundingClientRect().width * 0.75
          y += obj.getBoundingClientRect().height
          break
        }
        case 'bm': {
          x += obj.getBoundingClientRect().width * 0.5
          y += obj.getBoundingClientRect().height
          break
        }
        case 'bl': {
          x += obj.getBoundingClientRect().width * 0.25
          y += obj.getBoundingClientRect().height
          break
        }
        case 'lb': {
          y += obj.getBoundingClientRect().height * 0.75
          break
        }
        case 'lm': {
          y += obj.getBoundingClientRect().height * 0.5
          break
        }
        case 'lt': {
          y += obj.getBoundingClientRect().height * 0.25
          break
        }
      }
      return {x, y}
    },
    checkEdgesCount () {
      let side1 = this.connectionPoint_1[0]
      let side2 = this.connectionPoint_2[0]
      switch (side1) {
        case 't': {
          if (side2 === 'l' || side2 === 'r') {
            this.edgesCount = 1
          }
          break
        }
        case 'r': {
          if (side2 === 't' || side2 === 'b') {
            this.edgesCount = 1
          }
          break
        }
        case 'b': {
          if (side2 === 'l' || side2 === 'r') {
            this.edgesCount = 1
          }
          break
        }
        case 'l': {
          if (side2 === 't' || side2 === 'b') {
            this.edgesCount = 1
          }
          break
        }
      }
    }
  },
  mounted () {
    this.object_1 = document.getElementById(this.id_1)
    this.object_2 = document.getElementById(this.id_2)
    this.updateLine()
    this.checkEdgesCount()
    window.addEventListener('resize', this.updateLine)
  }
}
</script>

<style scoped>

</style>

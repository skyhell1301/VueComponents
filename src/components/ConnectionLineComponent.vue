<template>
  <svg
    baseProfile="full"
    :width="widthSVG"
    :height="heightSVG"
    :style="'top: ' + topSVG + 'px; left: ' + leftSVG + 'px'"
    style="position: absolute; z-index: 0"
    shape-rendering="geometricPrecision"
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
    // (точка соединения объекта) connectionPoint = 'tl' - верх-слева, 'tm' - верх-середина, 'tr' - верх-справа
    // 'rt' - право-верх, 'rm' - право-середина, 'rb' - право-низ
    // 'bl' - низ-слева, 'bm' - низ-середина, 'br' - низ-справа
    // 'lt' - слева-верх, 'lm' - слева-середина, 'lb' - слева-низ
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
    edgePositionPercent: {
      type: Array
    }
  },
  watch: {
  },
  methods: {
    updateLine () {
      let coordinate1 = this.calcСoordinates(this.object_1, this.connectionPoint_1)
      let coordinate2 = this.calcСoordinates(this.object_2, this.connectionPoint_2)
      this.widthSVG = Math.abs(coordinate1.x - coordinate2.x)
      this.heightSVG = Math.abs(coordinate1.y - coordinate2.y)
      this.leftSVG = coordinate1.x > coordinate2.x ? coordinate2.x : coordinate1.x
      this.topSVG = coordinate1.y > coordinate2.y ? coordinate2.y : coordinate1.y
      this.x1 = coordinate1.x > coordinate2.x ? this.widthSVG : 0
      this.y1 = coordinate1.y > coordinate2.y ? this.heightSVG : 0
      this.x2 = coordinate2.x > coordinate1.x ? this.widthSVG : 0
      this.y2 = coordinate2.y > coordinate1.y ? this.heightSVG : 0
      this.createPathLine()
      this.pathForLine = 'M' + this.x1 + ' ' + this.y1 + ' L ' + this.x2 + ' ' + this.y2
    },
    calcСoordinates (obj, point) {
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
    createPathLine () {
      // let path = 'M' + this.x1 + ' ' + this.y1
      // let pos
      // if (this.y1 === 0) {
      //   pos += 't'
      // }
      // if (this.x1 === 0) {
      //   pos += 'l'
      // }
      // switch (this.connectionPoint_1.side) {
      //   case 'top': {
      //     let direct
      //     for (let i = 0; i < this.edgesSum; i++) {
      //     }
      //     break
      //   }
      //   case 'right': {
      //     break
      //   }
      //   case 'left': {
      //     break
      //   }
      //   case 'bottom': {
      //     break
      //   }
      // }
    }
  },
  mounted () {
    this.object_1 = document.getElementById(this.id_1)
    this.object_2 = document.getElementById(this.id_2)
    this.updateLine()
    window.addEventListener('resize', this.updateLine)
  }
}
</script>

<style scoped>

</style>

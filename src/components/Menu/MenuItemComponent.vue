<template>
  <div class="menu-item-container">
    <div class="title-menu-item" @click="clickMenuItem">{{titleMenuItem}}</div>
    <div v-if="contentOpen" class="content-menu-item">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItemComponent',
  data () {
    return {
      MenuItemId: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'menu-item-id-' + one + two + three
      })(),
      contentOpen: false
    }
  },
  props: {
    titleMenuItem: {
      type: String,
      default: 'None'
    },
    emitId: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickMenuItem () {
      this.$emit('clickMenuItem', this.MenuItemId)
      this.contentOpen = !this.contentOpen
    },
    closeContent () {
      // this.contentOpen = false
    }
  },
  watch: {
    emitId () {
      if (this.emitId !== this.MenuItemId) {
        this.contentOpen = false
      }
    }
  }
}
</script>

<style scoped>
.menu-item-container {
  display: flex;
  height: 100%;
  margin-left: 2%;
}
.menu-item-container:hover {
}

.title-menu-item {
  justify-self: center;
  align-self: center;
  cursor: pointer;
  //height: 100%;
}

.content-menu-item {
  height: 100%;
  position: absolute;
  top: 100%;
  left: .5%;
  display: flex;
}
</style>

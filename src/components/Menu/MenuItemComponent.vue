<template>
  <div class="menu-item-container">
    <div :class="{'content-open': contentOpen}" class="title-menu-item-container" @click="clickMenuItem">
      <div class="title-menu-item">
        {{titleMenuItem}}
      </div>
    </div>
    <transition name="menu-content-animation">
    <div v-show="contentOpen" class="content-menu-item">
      <slot></slot>
    </div>
    </transition>
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
}
.content-open {
  transition: background-color .5s ease;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(148,148,148,0.71);
}
.menu-item-container:hover {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(148,148,148,0.71);
}

.title-menu-item-container {
  display: grid;
  cursor: pointer;
  height: 100%;
}

.title-menu-item {
  user-select: none;
  z-index: 2;
  justify-self: center;
  align-self: center;
  margin: 0 10px;

}

.content-menu-item {
  z-index: 2;
  background: white;
  transform-origin: 0 0;
  height: 100%;
  position: absolute;
  top: 100%;
  display: flex;
  height: 6vh;
  box-shadow: 0px 4px 5px 1px rgba(148,148,148,0.71);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

.menu-content-animation-enter-active {
  animation: bounce-out .5s reverse;
}
.menu-content-animation-leave-active {
  animation: bounce-out .3s;
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  60% {
    transform: scale(.2) translateY(0);
    opacity: .8;
  }
  100% {
    transform: scale(.2) translateY(-100%);
    opacity: 0;
  }
}
</style>

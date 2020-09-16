<template>
  <div class="container">
    <div>{{vall}}</div>
    <input type="text" v-model="vall" @keyup.enter="test" @input="$emit('update', vall)">
  </div>
</template>

<script>
export default {
  name: 'AntennSystemComponent',
  data () {
    return {
      vall: ''
    }
  },
  props: {
    valInput: {
      type: String,
      default: 'Hey'
    }
  },
  methods: {
    test () {
      this.valInput = this.vall
    }
  },
  mounted () {
    this.vall = this.valInput
  }
}
</script>

<style scoped>

</style>

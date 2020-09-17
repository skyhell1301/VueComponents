<template>
  <div class="wrapper_item-display-component" @dblclick="updateWindowStatus">
    <table class="table_parameters">
      <tr v-for="param in parametersDisplay"
          :key="param.id"
          >
        <td class="param-td">{{param.nameParameter}}</td>
        <td class="value-td">{{param.valueParameter}}</td>
      </tr>
    </table>
<!--    <PopUpWindow :active="isOpenWindow" :title="titleDevice" @clickClose="updateWindowStatus">-->
<!--      <table class="table_parameters" style="font-size: 30px">-->
<!--        <tr v-for="param in parametersDisplay"-->
<!--            :key="param.id"-->
<!--        >-->
<!--          <td class="param-td">{{param.nameParameter}}</td>-->
<!--          <td class="value-td">{{param.valueParameter}}</td>-->
<!--        </tr>-->
<!--      </table>-->
<!--    </PopUpWindow>-->
  </div>
</template>

<script>
import PopUpWindow from './PopUpWindow'
export default {
  name: 'ItemDisplayComponent',
  components: {PopUpWindow},
  props: {
    titleDevice: {
      type: String,
      default: 'TITLE'
    },
    parametersDisplay: {
      type: Array
    }
  },
  data () {
    return {
      isOpenWindow: false
    }
  },
  methods: {
    updateWindowStatus () {
      // this.isOpenWindow = !this.isOpenWindow
      // let test = new PopUpWindow({
      //   props:
      // })
      // test.$mount()
      // this.$refs.container.appendChild(test)
    }
  },
  created () {
  }
}
</script>

<style scoped>
.wrapper_item-display-component {
  //display: inline-block;
}
.table_parameters {
  //width: 500px;
  //height: 500px;
  //border: 1px solid black;
  margin: 0 auto;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  text-align: left;
  //border-collapse: separate;
  border-spacing: 5px;
  white-space: nowrap;

}
.param-td {
  padding: 3%;
}
.value-td {
  padding: 3%;
  margin-right: 10%;
  text-align: right;
}
</style>

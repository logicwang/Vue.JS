<template>
  <div id="app">
    <button @click="visible=true">显示</button>
    <my-alert :visible="visible" @close="closeAlert"></my-alert>
  </div>
</template>

<script>
import myalert from './myalert.vue'
export default {
  name: 'App',
  components:{'my-alert': myalert},
  data(){
    return {
      visible:false
    }
  },
  methods:{
    closeAlert(value){
      this.visible = value
    }
  }

}
</script>
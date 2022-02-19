<template>
  <div>
    <div>
      父级:
      <input type="text" v-model="message">
    </div>
    <v-child info="message"></v-child>
  </div>
</template>
<script>
import Chld from './Chld.vue'
export default {
  components:{
    'v-child':Chld
  },
  data(){
    return{
      message:'asdasd'
    }
  }
}
</script>
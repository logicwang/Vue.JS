<template>
  <div>
    <v-child info="message"></v-child>
  </div>
</template>
<script>
import Childs from './Chil.vue'
export default {
  components:{
    'v-child':Childs
  },
  data(){
    return{
      message:'aaa'
    }
  }
}
</script>
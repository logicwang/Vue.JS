<template>
  <div>父组件
    <son-comp :fatherMsg="fatherMsg"></son-comp>
  </div>
</template>

<script>
import sonComp from './sonComponent.vue'
export default {
  name: 'fatherComponent',
  data() {
    return {
      fatherMsg: 'fatherMe'
    }
  },
  components: {
    sonComp
  }
}
</script>

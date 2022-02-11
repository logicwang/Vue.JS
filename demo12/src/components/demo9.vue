<template>
  <div>
    这里是父组件<br>
    {{ name }}
    <Son1 v-model="name"></Son1>
  </div>
</template>

<script>
import Son1 from './son.vue'
export default {
  data () {
    return {
      name: '小王'
    }
  },
  components: { Son1 }
}
</script>
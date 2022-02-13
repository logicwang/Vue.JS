<template>
  <div class="son">
    这里是子组件<br>
    {{ value }}
    <button @click="changeName">修改value</button>
    
  </div>
</template>
<script>
  export default {
    props: ['value'],
    methods: {
      changeName () {
        this.$emit('input', '小李')
      }
    }
  }
</script>

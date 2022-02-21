<template>
  <div>
    <p>我是子组件</p>
    <p>子组件内容:{{ value }}</p>
    <p><button @click="onChange">改变内容</button></p>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  methods: {
    onChange() {
      this.value = '我是由子组件触发改变了内容'
    }
  }
}
</script>
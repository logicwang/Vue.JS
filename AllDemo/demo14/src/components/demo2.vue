<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="change">点我改名</button>
    <h1>点击按钮修改名字</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "老王",
    };
  },
  methods: {
    change() {
      this.message = "小李"; // 改变data中属性的值
    },
  },
};
</script>
<style>
h1{
    font-size: 15px;
}
</style>
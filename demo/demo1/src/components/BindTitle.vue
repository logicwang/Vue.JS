<template>
  <div id="app-2">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
</template>

<script>
export default {
  name: "BindTiele",
  data() {
    return {
      message: "页面加载于 " + new Date().toLocaleString(),
    };
  },
};
</script>

<style>
#app-2{
  margin-top: 30px;   
}
</style>
<template>
  <div >
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
  <!-- 出处：https://cn.vuejs.org/v2/guide/class-and-style.html -->
</template>

<script>
export default {
  data() {
    return {
      message: "wangyufei",
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
#app{margin-bottom: 60px;}
</style>
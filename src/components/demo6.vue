<template>
  <div>
    <div
      style="width: 200px; height: 200px; line-height: 200px"
      v-bind:class="{ active: isActive, green: isGreen }"
    >
      hi vue
    </div>
    <div
      v-bind:style="{
        color: activeColor,
        fontSize: fontSize + 'px',
        background: background,
      }"
    >
      vue.js
    </div>
  </div>
  <!-- 出处：https://cn.vuejs.org/v2/guide/class-and-style.html -->
</template>
<script>
      export default {
        data: () => ({
          isActive: true,
          isGreen: true,
          activeColor: "red",
          fontSize: 30,
          background: "black",
        }),
      };
</script>
<style>
.active {
  background: red;
  margin-top: 50px;
  font-size: 30px;
}
.green {
  color: yellow;
}
</style>
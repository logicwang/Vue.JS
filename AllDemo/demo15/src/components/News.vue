<template>
  <div>
    <v-header></v-header>
    <h2>aaaaaaaaa</h2>

    <ul>
      <li>vvvvvvvv</li>
      <li>xxxxxxxx</li>
      <li>zzzzzzzz</li>
    </ul>
  </div>
</template>

<script>
//引入头部组件

import Header from "./Header.vue";

export default {
  data() {
    return {
      msg: "我是一个新闻组件",
    };
  },
  components: {
    "v-header": Header,
  },
};
</script>

<style>
li{
  list-style-type: none;
}
</style>
<template>
  <div>
    <hr />
    <v-demo1></v-demo1>
    <hr />
    <v-demo2></v-demo2>
    <hr />
    <v-demo3></v-demo3>
    <hr />
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!--出处： https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0 -->
  </div>
</template>

<script>
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
export default {
  components: {
    "v-demo1": Demo1,
    "v-demo2": Demo2,
    "v-demo3": Demo3,
  },
};
</script>

<style>
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 3px solid #ff000f;
}
div {
  text-align: center;
}
</style>

<template>
  <div>
    <hr />
    <v-demo1></v-demo1>
    <hr />
    <v-demo2></v-demo2>
    <hr />
    <v-demo3></v-demo3>
    <hr />
  </div>
</template>

<script>
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
export default {
  name: "App",
  components: {
    "v-demo1": Demo1,
    "v-demo2": Demo2,
    "v-demo3": Demo3,
  },
};
</script>

<style>
hr {
  margin: 20px 0 20px 0;
  border: 3px solid #ff000f;
}
div {
  text-align: center;
}
</style>
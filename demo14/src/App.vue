<template>
  <div>
    <hr />
    <v-demo1></v-demo1>
    <hr />
    <v-demo2></v-demo2>
  </div>
</template>

<script>
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";
export default {
  name: "App",
  components: {
    "v-demo1": Demo1,
    "v-demo2": Demo2,
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
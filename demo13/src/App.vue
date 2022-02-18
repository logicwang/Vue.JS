<template>
  <div >
    <hr />
    <v-demo1></v-demo1>
    <hr />
    <v-demo2></v-demo2>
    <hr />
    <v-demo3></v-demo3>
    <hr />
    <v-demo4></v-demo4>
    <hr />
    <v-demo5></v-demo5>
    <hr />
  </div>
</template>

<script>
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
import Demo4 from "./components/demo4.vue";
import Demo5 from "./components/demo5.vue";
export default {
  components: {
    "v-demo1": Demo1,
    "v-demo2": Demo2,
    "v-demo3": Demo3,
    "v-demo4": Demo4,
    "v-demo5": Demo5,
  }
}
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
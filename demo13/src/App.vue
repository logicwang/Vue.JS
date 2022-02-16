<template>
  <div >
    <hr />
    <v-demo1></v-demo1>
    <hr />
  </div>
</template>

<script>
import Demo1 from "./components/demo1.vue";
export default {
  components: {
    "v-demo1": Demo1,
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
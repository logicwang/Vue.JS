<template>
  <div>
    <hr />
    <v-demo1></v-demo1>
    <hr />
  </div>
</template>
<script>
import Demo1 from "./components/App.vue";
export default {
  components: {
    "v-demo1": Demo1,
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
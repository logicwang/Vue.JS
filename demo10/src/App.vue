<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <hr />
    <v-demo1></v-demo1>
    <hr />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Demo1 from "./components/demo1.vue";

export default {
  components: {
    "v-demo1": Demo1,
  },
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  // data() {
  //   return{
  //     counter: 0
  //   }
  // },
};
</script>

<style>
hr {
  margin-top: 20px;
  border: 3px solid #ff000f;
}
div {
  text-align: center;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

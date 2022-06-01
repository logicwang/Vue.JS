<template>
  <div id="app">
    <div>
      <!-- <HelloWorld /> -->
      <!-- <DemoApp /> -->
      <!-- <hr/> -->
      <!-- <CheckOut/> -->
      <CheckApp/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import DemoApp from "./components/DemoApp.vue";
// import CheckOut from "./components/CheckOut.vue";
import CheckApp from "./components/CheckApp.vue";

export default {
  name: "app",
  components: {
    // HelloWorld,
    // DemoApp,
    // CheckOut,
    CheckApp
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

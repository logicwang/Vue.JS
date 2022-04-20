<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <hr />
    <CallApp />
    <hr />
    <!-- <WhileApp /> -->
    <!-- <WlButton/> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CallApp from "./components/CallApp.vue";
// import WhileApp from "./components/WhileApp.vue";
// import WlButton from "./components/WlButton.vue";

export default {
  name: "app",

  components: {
    CallApp,
    // HelloWorld,
    // WhileApp,
    // WlButton
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
}
</style>

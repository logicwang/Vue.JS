<template>
  <div id="app">
    <hr />
    <DemoApp />
    <hr />
    <!-- <HelloWorld />
    <hr />
    <NameApp />
    <hr />
    <MeteApp />
    <hr />
    <AppDemo />
    <hr /> -->
  </div>
</template>

<script>
import DemoApp from "./components/DemoApp.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import NameApp from "./components/NameApp.vue";
// import MeteApp from "./components/MeteApp.vue";
// import AppDemo from "./components/AppDemo.vue";

export default {
  name: "app",
  components: {
    DemoApp,
    // HelloWorld,
    // NameApp,
    // MeteApp,
    // AppDemo,
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
hr {
  border: 5px solid rgb(127, 255, 212);
}
</style>

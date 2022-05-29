<template>
  <div id="app">
    <!-- <hr />
    <DemoApp />
    <hr />
    <AppApp />
    <hr />
    <HelloWorld />
    <hr />
    <NameApp />
    <hr />
    <MeteApp />
    <hr /> -->
    <!-- <AppDemo />
    <hr /> -->
    <LineApp/>
  </div>
</template>

<script>
// import AppApp from "./components/AppApp.vue";
// // import DemoApp from "./components/DemoApp.vue";
// // import HelloWorld from "./components/HelloWorld.vue";
// // import NameApp from "./components/NameApp.vue";
// // import MeteApp from "./components/MeteApp.vue";
// import AppDemo from "./components/AppDemo.vue";
import LineApp from "./components/LineApp.vue";

export default {
  name: "app",
  components: {
    // AppApp,
    // DemoApp,
    // HelloWorld,
    // NameApp,
    // MeteApp,
    // AppDemo,
    LineApp
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
hr {
  border: 5px solid rgb(127, 255, 212);
}
</style>

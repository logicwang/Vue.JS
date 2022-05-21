<template>
  <div id="app">
    <hr />
    <CallApp />
    <hr />
    <MetaApp />
    <!-- <hr />
    <WorldApp />
    <hr />
    <HelloWorld />
    <hr />
    <MiApp/>
    <hr />
    <AppleApp /> -->
  </div>
  
</template>

<script>
import CallApp from "./components/CallApp.vue";
import MetaApp from "./components/MetaApp.vue";
// import WorldApp from "./components/WorldApp.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import MiApp from "./components/MiApp.vue"
// import AppleApp from "./components/AppleApp.vue"

export default {
  name: "app",

  components: {
    CallApp,
    MetaApp,
    // WorldApp,
    // HelloWorld,
    // MiApp,
    // AppleApp
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

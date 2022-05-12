<template>
  <div id="app">
    <!-- <hr />
    <CallApp />
    <hr />
    <MetaApp /> -->
    <WorldApp/>
  </div>
</template>

<script>
// import CallApp from "./components/CallApp.vue";
// import MetaApp from "./components/MetaApp.vue";
import WorldApp from "./components/WorldApp.vue";

export default {
  name: "app",

  components: { 
    // CallApp,
    // MetaApp,
    WorldApp
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
hr{
  border: 5px solid rgb(127,255,212);
}
</style>

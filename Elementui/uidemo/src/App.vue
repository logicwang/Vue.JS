<template>
  <div id="app">
    <HelloWorld />
    <hr />
    <CallApp />
    <hr />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CallApp from "./components/CallApp.vue";

export default {
  name: "app",

  components: { 
    CallApp,
    HelloWorld,
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

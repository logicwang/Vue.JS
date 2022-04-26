<template>
  <div id="app">
    <HelloWorld />
    <hr />
    <CallApp />
    <hr />
    <MetaApp />
    <hr />
    <TbaleApp />
    <hr />
    <WhileApp />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CallApp from "./components/CallApp.vue";
import MetaApp from "./components/MetaApp.vue";
import TbaleApp from "./components/TbaleApp.vue";
import WhileApp from "./components/WhileApp.vue";

export default {
  name: "app",

  components: { 
    CallApp,
    HelloWorld,
    MetaApp,
    TbaleApp,
    WhileApp
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

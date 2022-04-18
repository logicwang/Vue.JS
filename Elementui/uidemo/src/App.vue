<template>
  <div id="app">
    <HelloWorld />
    <hr />
    <WhileApp />
    <hr />
    <CallApp />
    <hr />
    <p>你看我出不出来</p>
    <meta charset="UTF-8" />
    <title></title>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import WhileApp from "./components/WhileApp.vue";
import CallApp from "./components/CallApp.vue";

alert("这是一个警告框");

export default {
  name: "app",

  components: {
    HelloWorld,
    WhileApp,
    CallApp,
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

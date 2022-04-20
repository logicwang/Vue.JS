<template>
  <div id="app">
    <HelloWorld />
    <hr />
    <BindTitle />
    <hr />
    <SeenApp />
    <hr />
    <ToodApp />
    <hr />
    <ReverseMessage />
    <hr/>
    <BindApp/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BindTitle from "./components/BindTitle.vue";
import SeenApp from "./components/SeenApp.vue";
import ToodApp from "./components/ToodApp.vue";
import ReverseMessage from "./components/ReverseMessage.vue";
import BindApp from "./components/BindApp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BindTitle,
    SeenApp,
    ToodApp,
    ReverseMessage,
    BindApp
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
hr {
  border: 2px solid;
}
.BindTitle {
  margin-top: 20px;
}
</style>

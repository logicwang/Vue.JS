<template>
  <div id="app">
    <HelloWorld/>
    <hr/>
    <BindTitle/>
    <hr/>
    <SeenApp/>
    <hr/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BindTitle from './components/BindTitle.vue'
import SeenApp from './components/SeenApp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BindTitle,
    SeenApp
  }
}
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
hr{
  border: 2px solid;
}
.BindTitle{
margin-top: 20px;
}
</style>

<template>
  <div id="app">
    <HelloWorld/>
    <WhileApp/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WhileApp from './components/WhileApp.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    WhileApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

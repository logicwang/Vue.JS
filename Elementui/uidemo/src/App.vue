<template>
  <div id="app">
    <HelloWorld/>
    <!-- <WhileApp/> -->
    <CallApp/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import WhileApp from './components/WhileApp.vue'
import CallApp from './components/CallApp.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    // WhileApp,
    CallApp
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

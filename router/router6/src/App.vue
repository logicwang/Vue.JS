<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HomeApp></HomeApp>
  </div>
</template>

<script>
import HelloWorld from './components/UserApp.vue'
import HomeApp from './components/HomeApp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeApp
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
  margin-top: 60px;
}
</style>
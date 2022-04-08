<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr/>
    <ShowModal/>
  </div>
</template>

<script>
import HelloWorld from './components/Springframe/HelloWorld.vue'
import ShowModal from './components/Springframe/ShowModal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ShowModal
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
hr{
  border: 2px solid pink;
}
</style>
